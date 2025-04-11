'use server'

import db from "@/lib/db";
import { sendGoalMissedEmail } from "@/lib/mail";

export async function hasUserSetGoals(userId) {
  try {
    // Use count instead of findFirst for better performance
    const goalCount = await db.goal.count({
      where: {
        userId: userId
      },
      take: 1 // Limit to 1 to stop counting after finding the first record
    });

    return goalCount > 0;

  } catch (error) {
    console.error('Error checking user goals:', error);
    return false;
  }
}

export async function getUserGoals(userId) {
  const goals = await db.goal.findMany({ where: { userId } });
  return goals;
}


export async function getGoalProgress(userId) {
  try {
    // Fetch the user's current active goal
    const currentGoal = await db.goal.findFirst({
      where: { userId, status: "ACTIVE" },
      orderBy: { createdAt: "desc" },
    });

    // Prepare chart data: initialize months with default 0
    const months = Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      monthName: new Date(2025, i, 1).toLocaleString("default", { month: "short" }),
      livesReached: 0,
    }));

    if (!currentGoal) {
      // No active goal: return empty progress with valid chart structure
      return {
        success: true,
        data: {
          currentProgress: {
            totalLivesReached: 0,
            targetLives: 0,
          },
          chartData: {
            labels: months.map((month) => month.monthName),
            datasets: [
              {
                data: months.map((month) => month.livesReached),
                borderColor: "#000000",
                borderDash: [5, 5],
                tension: 0.4,
                pointBackgroundColor: "#000000",
                pointRadius: 4,
              },
            ],
          },
        },
      };
    }

    // Fetch donations made during the goal's active period
    const donations = await db.donation.findMany({
      where: {
        userId,
      },
      select: {
        impact: true,
        createdAt: true,
      },
    });

    if (donations.length === 0) {
      // No donations: return progress with the goal's target but empty chart
      return {
        success: true,
        data: {
          currentProgress: {
            totalLivesReached: 0,
            targetLives: currentGoal.targetLives,
          },
          chartData: {
            labels: months.map((month) => month.monthName),
            datasets: [
              {
                data: months.map((month) => month.livesReached),
                borderColor: "#000000",
                borderDash: [5, 5],
                tension: 0.4,
                pointBackgroundColor: "#000000",
                pointRadius: 4,
              },
            ],
          },
        },
      };
    }

    // Populate months with donation data
    donations.forEach((donation) => {
      const monthIndex = new Date(donation.createdAt).getMonth();
      months[monthIndex].livesReached += parseFloat(donation.impact);
    });

    // Extract total lives reached
    const totalLivesReached = donations.reduce((acc, curr) => acc + parseFloat(curr.impact), 0);

    return {
      success: true,
      data: {
        currentProgress: {
          totalLivesReached,
          targetLives: currentGoal.targetLives,
        },
        chartData: {
          labels: months.map((month) => month.monthName),
          datasets: [
            {
              data: months.map((month) => month.livesReached),
              borderColor: "#000000",
              borderDash: [5, 5],
              tension: 0.4,
              pointBackgroundColor: "#000000",
              pointRadius: 4,
            },
          ],
        },
      },
    };
  } catch (error) {
    console.error("Error fetching goal progress:", error);
    return {
      success: false,
      error: "Failed to fetch goal progress",
    };
  }
}

export async function checkGoalStatusAndNotify(userId) {
  const currentDate = new Date();

  const user = await db.user.findFirst({ where: { id: userId } });
  const goal = await db.goal.findFirst({ where: { userId, status: "ACTIVE" } });

  if (goal){
    if (goal.endDate && currentDate >= new Date(goal.endDate)) {
      if (goal.achievedLives < goal.targetLives) {
       
        await sendGoalMissedEmail(
          user.email,
          user.firstName,
          user.name,
          goal.targetLives,
          goal.achievedLives
        );
      }
      await db.goal.delete({
        where: { id: goal.id },
      });
    }
  }
}
