"use client";
import { useState } from "react";
import "./styles.scss";
import { MdOutlineEmail } from "react-icons/md";
import { useModalStore } from "@/store";




function EmailVerificationPrompt({}) {

  const {  toggleOtpModalOpen, isVerificationModalOpen, toggleVerificationModal } = useModalStore();
 
  return (
    <>
      <div className={`verification-modal ${!isVerificationModalOpen && 'hidden'}`}>
        <div className="verification-overlay"></div>
        <div className="modal-content">
         <div className="top">
            <div className="header">
           <div className="icon">
           <MdOutlineEmail size={35} />
           </div>
                <h1>Check Your Email</h1>
            </div>
            <p>We sent a verification code to your email</p>
         </div>
         <div className="bottom">
            <button onClick={() => {
              toggleVerificationModal()
              toggleOtpModalOpen()
            }}>Continue</button>
            <p>Didn’t receive the email? <span>Click to resend</span></p>
         </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerificationPrompt;
