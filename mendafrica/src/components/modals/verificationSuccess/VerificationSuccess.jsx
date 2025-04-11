"use client";
import { useState } from "react";
import "./styles.scss";
import { MdOutlineEmail } from "react-icons/md";
import { useModalStore } from "@/store";
import { BsCheck2Circle } from "react-icons/bs";
import { useRouter } from "next/navigation";

function VerificationSuccess({}) {
  const router = useRouter();

  const {
    toggleIsemailVerificationSuccessOpen,
    isemailVerificationSuccessOpen,
    toggleOtpModalOpen,
    toggleSignInModal,
  } = useModalStore();

  const handleClick = () => {
    toggleIsemailVerificationSuccessOpen();
    toggleSignInModal();
  };

  const handleOverlayClick = (e) => {
    // Close the modal if the overlay is clicked
    if (e.target.classList.contains('verificationSuccess-overlay')) {
      toggleIsemailVerificationSuccessOpen();
    }
  };

  return (
    <>
      <div
        className={`verificationSuccess-modal ${
          !isemailVerificationSuccessOpen && "hidden"
        }`}
      >
        <div className="verificationSuccess-overlay" onClick={handleOverlayClick}></div>
        <div className="modal-content">
          <div className="top">
            <div className="header">
              <div className="icon">
                <BsCheck2Circle size={35} color="#039855" />
              </div>
              <h1>Email verified</h1>
            </div>
            <p>Your email has been successfully</p>
            <p>verified. Click below to login.</p>
          </div>
          <div className="bottom">
            <button onClick={handleClick}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerificationSuccess;
