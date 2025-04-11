"use client";

import { useState } from "react";
import { forgotPassword } from "@/actions/auth/forgot-password";
import ComponentLevelLoader from "@/components/Loader";
import { useModalStore } from "@/store";
import "./styles.scss";
import { toast } from "react-toastify";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { isForgotPasswordModalOpen, toggleForgotPasswordModalOpen, toggleSignInModal } = useModalStore();

  // Function to handle closing the modal when the overlay is clicked
  const handleOverlayClick = () => {
    toggleForgotPasswordModalOpen();
  };

  // Prevent modal from closing when clicking inside modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await forgotPassword(email);
      
      if (response.error) {
        toast.error(response.error);
      }

      if (response.success) {
        toast.success(response.success);
        toggleForgotPasswordModalOpen();
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`forgot-password-modal ${!isForgotPasswordModalOpen && "hidden"}`}>
      {/* Overlay to detect outside click */}
      <div className="forgot-password-overlay" onClick={handleOverlayClick}></div>

      {/* Modal content with click propagation stopped */}
      <div className="modal-content" onClick={handleModalContentClick}>
        <div className="top">
          <div className="header">
            <h1>Forgot Password</h1>
          </div>
          <p>Enter your email to receive a password reset link</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="formHolder">
            <h2>Email</h2>
            <div className="input">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="bottom">
            <button type="submit" disabled={loading}>
              {loading ? (
                <ComponentLevelLoader color={"#ffffff"} />
              ) : (
                "Send Reset Link"
              )}
            </button>
            <p>
              Remember your password? <span onClick={() => {
                toggleForgotPasswordModalOpen();
                toggleSignInModal();
              }} style={{
                cursor: 'pointer'
              }}>Sign In</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
} 