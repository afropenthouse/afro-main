"use client";

import { useModalStore } from "@/store";
import { Target } from "lucide-react";
import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export const GoalSuccess = () => {
  const router = useRouter();
  const { isGoalSuccessModalOpen, toggleGoalSuccessModal } = useModalStore();

  const handleGiveNow = () => {
    toggleGoalSuccessModal(); // Close the modal
    router.push('/#projects'); // Navigate to home
    // Add a small delay to ensure the navigation happens before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      projectsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isGoalSuccessModalOpen) return null;

  return (
    <div className="goalsuccess-overlay">
      <div className="goalsuccess-container">
        <div className="goalsuccess-content">
          {/* Title Section */}
          <div className="title-section">
            <h2>Goal Set!</h2>
            <p>Your goal has successfully been created. Click below to begin.</p>
          </div>

          {/* Icon Section */}
          <div className="icon-section">
            <div className="icon-container">
             <Image src="/targetpng.png" alt="" width={70} height={70} />
            </div>
           
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <button 
              className="primary-button"
              onClick={handleGiveNow}
            >
              Give Now
            </button>
            <button 
              className="secondary-button"
              onClick={toggleGoalSuccessModal}
            >
              Remind me later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSuccess