"use client";
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { IoClose } from "react-icons/io5";
import { useModalStore } from "@/store";
import { useGoalStore } from "@/store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./style.scss";
import { getGoalProgress, getUserGoals } from "@/actions/user";
import { currentClientUser } from "@/helpers/current-client-user";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GoalProgress() {
  const currentUser = currentClientUser();
  const { targetLives } = useGoalStore();
  const { data: userGoals } = useQuery({
    queryKey: ["userGoals"],
    queryFn: async () => {
      const result = await getUserGoals(currentUser.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result.success;
    },
    refetchOnMount: "always",
  });
  console.log(`userGoals: ${JSON.stringify(userGoals, null, 2)}`);
  const { data: goalProgress } = useQuery({
    queryKey: ["goalProgress"],
    queryFn: async () => {
      const result = await getGoalProgress(currentUser.i);
      if (result.error) {
        throw new Error(result.error);
      }
      return result.data;
    },
    refetchOnMount: "always",
  });
  const { isGoalProgressModalOpen, closeGoalProgressModal } = useModalStore();

  console.log(`userDonationStats: ${JSON.stringify(goalProgress, null, 2)}`);

  // Chart data and options
  const data = goalProgress?.chartData;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
    },
  };

  // Get current month index (0-11)
  const currentMonthIndex = new Date().getMonth();

  // Get current month name
  const currentMonthName = new Date().toLocaleString("default", {
    month: "long",
  });

  // Calculate tooltip position based on chart width and current month
  const tooltipStyle = {
    left: `${(currentMonthIndex / 11) * 100}%`, // 11 because it's 0-based index
    transform: "translateX(-50%)", // Center the tooltip on the point
  };

  if (!isGoalProgressModalOpen) return null;

  return (
    <div className="progress-modal-overlay">
      <div className="progress-modal-content">
        <div className="progress-modal-header">
          <button className="close-button" onClick={closeGoalProgressModal}>
            <IoClose />
          </button>
        </div>

        <div className="goal-progress-modal">
          <div className="header">
            <h1>
              Lives Reached:{" "}
              {Array.isArray(userGoals) && userGoals[0]?.achievedLives
                ? userGoals[0].achievedLives
                : 0}
            </h1>
          </div>

          <div className="chart-container">
            <Line data={data} options={options} />
            <div className="tooltip" style={tooltipStyle}>
              <span className="tooltip-text">{currentMonthName}</span>
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="progress-modal-footer">
            <div className="progress-tracker">
              <span>
                {Array.isArray(userGoals) && userGoals[0]?.achievedLives
                  ? userGoals[0].achievedLives
                  : 0}
                of {Array.isArray(userGoals) && userGoals[0]?.achievedLives ? Number(userGoals[0].targetLives) : targetLives}
              </span>
            </div>
            <button className="progress-button">Goal in progress..</button>
          </div>
        </div>
      </div>
    </div>
  );
}
