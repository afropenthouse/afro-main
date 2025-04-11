"use server"

import db from "@/lib/db";
import { sendGoalCompletedEmail, sendGoalReachedEmail, sendThankyouEmail } from "@/lib/mail";
import { currentServerUser } from "@/lib/serverAuthState";
import { PrismaClient, Prisma } from '@prisma/client'

export const addProject = async (values) => {
    try {
      await db.project.create({
        data: values
      });
      return { success: "Project created" };
    } catch (error) {
      console.log("[PROJECT_CREATE_ERROR]", error);
      return { error: "Something went wrong with project creation." };
    }
  };


  export const getProjects = async (userId) => {
    try {
      const projects = await db.project.findMany({
        where: {
          status: {
            in: ['ONGOING', 'COMPLETED'],
          },
        },
        orderBy: {
          createdAt: 'asc',
        },
        include: {
          donations: {
            where: { userId }, // Filter donations for the current user
            select: {
              fimpact: true, // Include the fimpact of the donation
            },
          },
        },
      });
  
      const processedProjects = projects.map((project) => {
        const userDonations = project.donations;
  
        return {
          ...project,
          hasUserDonated: userDonations.length > 0, // Check if the user has donated
          fimpact: userDonations.reduce((total, donation) => total + (donation.fimpact || 0), 0), // Sum up fimpact
        };
      });
  
      return {
        success: true,
        data: processedProjects,
      };
    } catch (error) {
      // console.log("[PROJECTS_GET_ERROR]", error);
      return {
        success: false,
        error: "Failed to fetch projects",
      };
    }
  };
  

  export const getOngoingProjects = async () => {
    try {
      const projects = await db.project.findMany({
        where: {
          status: 'ONGOING'
        },
        orderBy: {
          createdAt: 'asc'
        }
      });
  
      return {
        success: true,
        data: projects
      };
    } catch (error) {
      // console.log("[PROJECTS_GET_ERROR]", error);
      return {
        success: false,
        error: "Failed to fetch projects"
      };
    }
  };

  export const checkUserDonation = async (userId, projectId) => {
    try {
      const donation = await db.donation.findFirst({
        where: {
          userId: userId,
          projectId: projectId,
          status: 'COMPLETED'
        }
      });
  
      return {
        success: true,
        data: !!donation  // converts to boolean - true if donation exists, false if null
      };
    } catch (error) {
      // console.log("[CHECK_DONATION_ERROR]", error);
      return {
        success: false,
        error: "Failed to check donation status"
      };
    }
  };

  export const createDonation = async (userId, projectId, amount, selectedCurrency) => {
    console.log("create donation", userId, projectId, amount, selectedCurrency);
    const user = await currentServerUser();
  
    try {
      
      // Parse amount to Decimal and handle validation
      const parsedAmount = new Prisma.Decimal(amount);
  
      if (parsedAmount.isNaN() || parsedAmount.lte(0)) {
        return {
          success: false,
          error: "Invalid amount provided",
        };
      }
  
      // 1. Get the project to calculate impact
      const project = await db.project.findUnique({
        where: { id: projectId },
        select: {
          title: true,
          amountPerImpact: true,
          achievedGoal: true,
        },
      });
  
      if (!project || !project.amountPerImpact) {
        return { success: false, error: "Project not found!" };
      }
  
      // 2. Calculate impact
      const amountPerImpact = new Prisma.Decimal(project.amountPerImpact);
      
      const actualImpact = parsedAmount.dividedBy(amountPerImpact); 
      const impact = actualImpact.ceil(); // Round up for whole number impact
  
      // 3. Check if the user already has a donation for this project
      const existingDonation = await db.donation.findFirst({
        where: { userId, projectId },
      });
  
      let donation;
      if (existingDonation) {
        // Update the existing donation
        donation = await db.donation.update({
          where: { id: existingDonation.id },
          data: {
            amount:new Prisma.Decimal(existingDonation.amount).plus(parsedAmount),
            fimpact: new Prisma.Decimal(existingDonation.fimpact).plus(actualImpact),
            impact: new Prisma.Decimal(existingDonation.impact).plus(impact),
          },
        });
      } else {
        // Create a new donation record
        donation = await db.donation.create({
          data: {
            userId,
            projectId,
            amount: parsedAmount,
            fimpact: actualImpact,
            impact,
            currency: selectedCurrency,
          },
        });
      }
  
      // 4. Update project's achieved goal
      const currentAchieved = new Prisma.Decimal(project.achievedGoal || 0);
      const newAchieved = currentAchieved.plus(actualImpact);
  
      await db.project.update({
        where: { id: projectId },
        data: {
          achievedGoal: newAchieved,
        },
      });
  
      // 5. Update user's active goal if exists
      const activeGoal = await db.goal.findFirst({
        where: {
          userId,
          status: "ACTIVE",
        },
      });
  
      if (activeGoal) {
        const newAchievedLives = new Prisma.Decimal(activeGoal.achievedLives).plus(actualImpact);
  
        const updatedGoal = await db.goal.update({
          where: { id: activeGoal.id },
          data: {
            achievedLives: newAchievedLives,
            status:
              newAchievedLives.gte(activeGoal.targetLives)
                ? "COMPLETED"
                : "ACTIVE",
          },
        });
  
        // Send appropriate email based on goal status
        if (newAchievedLives.gte(activeGoal.targetLives)) {
          
          await sendGoalCompletedEmail(
            user.email,
            user.firstName,
            user.name,
            activeGoal.targetLives
          );
          await db.goal.delete({
            where: { id: activeGoal.id },
          });
        } else {
          await sendGoalReachedEmail(
            user.email,
            activeGoal.targetLives,
            user.firstName,
            user.name,
            newAchievedLives
          );
        }
      }
  
      // Pass project name and donation amount to the thank-you email
      await sendThankyouEmail(
        user.firstName,
        user.name,
        user.email,
        parsedAmount.toString(),
        project.title,
        selectedCurrency
      );
  
      return {
        success: true,
        data: donation,
        project,
      };
    } catch (error) {
      console.error("[CREATE_DONATION_ERROR]", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to process donation",
      };
    }
  };
  
  
  

  export const getUserDonations = async (userId) => {
    try {
      // Fetch the user's donation details
      const userDonations = await db.donation.findMany({
        where: {
          userId,
        },
        select: {
          amount: true,
          impact: true,
          fimpact:true,
          createdAt: true,
          project: {
            select: {
              id: true,
              title: true,
              image: true,
              partner: true,
              category: true,
              goal: true,
              achievedGoal: true,
            },
          },
        },
      });
  
      // If no donations found, return an empty response
      if (!userDonations || userDonations.length === 0) {
        return {
          success: true,
          donations: [],
          totalStats: {
            fimpact: 0,
            amount: 0,
            impact: 0,
            totalAchievedGoal: 0, // New stat for total achieved goal
          },
        };
      }
  
      // Calculate all-time donation stats (amount, impact, and totalAchievedGoal)
      const totalStats = userDonations.reduce(
        (stats, donation) => {
          stats.amount = new Prisma.Decimal(stats.amount).plus(new Prisma.Decimal(donation.amount));
          stats.impact = new Prisma.Decimal(stats.impact).plus(new Prisma.Decimal(donation.impact));
          stats.fimpact = new Prisma.Decimal(stats.fimpact).plus(new Prisma.Decimal(donation.fimpact));
          // Add achievedGoal from the associated project (parsed to number)
          const projectAchievedGoal = parseFloat(donation.project.achievedGoal || "0", 10);
          stats.totalAchievedGoal += projectAchievedGoal;
          return stats;
        },
        { amount: 0, impact: 0, fimpact:0, totalAchievedGoal: 0 }
      );
  
      // Format the donation data with project details
      const formattedDonations = userDonations.map((donation) => ({
        amount: donation.amount,
        impact: donation.impact,
        fimpact: donation.fimpact,
        date: donation.createdAt,
        project: {
          id: donation.project.id,
          title: donation.project.title,
          image: donation.project.image,
          partner: donation.project.partner,
          category: donation.project.category,
          goal: donation.project.goal,
          achievedGoal: donation.project.achievedGoal,
        },
      }));
  
      return {
        success: true,
        donations: formattedDonations,
        totalStats,
      };
    } catch (error) {
      console.error("[GET_USER_DONATIONS_ERROR]", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch user donations",
      };
    }
  };
  
  

export const createGoal = async (values) => {
  try {
    const user = await currentServerUser();
    
    if (!user) {
      return { error: "Unauthorized" };
    }

    // Check if user has any active goals of the same period
    const existingActiveGoal = await db.goal.findFirst({
      where: {
        userId: user.id,
        period: values.period,
        status: "ACTIVE"
      }
    });

    if (existingActiveGoal) {
      return { 
        error: `You already have an active ${values.period.toLowerCase()} goal` 
      };
    }

    // Calculate end date based on period
    const startDate = new Date();
    let endDate = new Date(startDate);
    
    if (values.period === "MONTHLY") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (values.period === "YEARLY") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    // Validate target lives
    const targetLives = parseInt(values.targetLives);
    if (isNaN(targetLives) || targetLives <= 0) {
      return { error: "Please enter a valid target number of lives" };
    }

    const goal = await db.goal.create({
      data: {
        userId: user.id,
        targetLives,
        period: values.period,
        startDate,
        endDate,
        status: "ACTIVE"
      }
    });

    return {
      success: true,
      data: goal
    };

  } catch (error) {
    console.error("[GOAL_CREATE_ERROR]", error);
    return {
      success: false,
      error: "Failed to create goal"
    };
  }
};

export const getCurrentGoal = async () => {
  try {
    const user = await currentServerUser();
    
    if (!user) {
      return { error: "Unauthorized" };
    }

    const goal = await db.goal.findFirst({
      where: {
        userId: user.id,
        status: "ACTIVE"
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return {
      success: true,
      data: goal
    };

  } catch (error) {
    console.error("[GOAL_GET_ERROR]", error);
    return {
      success: false,
      error: "Failed to fetch goal"
    };
  }
};

