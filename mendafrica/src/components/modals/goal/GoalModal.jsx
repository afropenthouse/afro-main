"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { createGoal } from "@/actions/project";
import { useModalStore } from "@/store";
import "./styles.scss";
import ComponentLevelLoader from "@/components/Loader";
import { useGoalStore } from "@/store";
import { toast } from "react-toastify";
export const GoalModal = () => {
  const { isGoalModalOpen, toggleGoalModal, toggleGoalSuccessModal } = useModalStore();
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState("MONTHLY");
  const [targetLives, setTargetLives] = useState("");
  const [reminders, setReminders] = useState(true);
  const { setGoal } = useGoalStore();

  if (!isGoalModalOpen) return null;

  const onSubmit = async () => {
    try {
      setLoading(true);
      
      const response = await createGoal({
        targetLives: parseInt(targetLives),
        period,
      });

      if (response.error) {
        toast.error(response.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
      toggleGoalModal();
      toggleGoalSuccessModal();
      setGoal(response.data.targetLives, response.data.period);
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="goalmodal-overlay">
      <div className="goalmodal-container">
        <div className="goalmodal-header">
          <h2>Set your 2025 Goal</h2>
          <button onClick={toggleGoalModal} className="close-button">
            <X size={24} color="#3D4754" />
          </button>
        </div>

        <div className="goalmodal-content">
          {/* Goal Duration */}
          <div className="input-group">
            <label>Goal Duration</label>
            <p className="description">Select goal duration time</p>
            <div className="toggle-group">
              <button 
                className={`toggle-button ${period === "MONTHLY" ? "active" : ""}`}
                onClick={() => setPeriod("MONTHLY")}
              >
                Monthly
              </button>
              <button 
                className={`toggle-button ${period === "YEARLY" ? "active" : ""}`}
                onClick={() => setPeriod("YEARLY")}
              >
                Annually
              </button>
            </div>
          </div>

          {/* Goal Input */}
          <div className="input-group">
            <label>What is your Goal?</label>
            <p className="description">Enter the amount of lives you want to impact</p>
            <input
              type="number"
              placeholder="e.g., 10,000"
              value={targetLives}
              onChange={(e) => setTargetLives(e.target.value)}
              className="goal-input"
            />
          </div>


          {/* Action Button */}
          <button
            onClick={onSubmit}
            disabled={loading || !targetLives}
            className="submit-button"
          >
           {loading ? <ComponentLevelLoader color={'#ffffff'} /> : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};
