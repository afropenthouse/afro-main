"use client";
import { useState } from "react";
import "./styles.scss";
import Image from "next/image";
import { useModalStore } from "@/store";

function Member({}) {
  const { toggleMemberModal, isMemberModalOpen, toggleSignUpModal } = useModalStore();

  const handleClick = () => {
    toggleMemberModal()
    toggleSignUpModal()
  }

  // Function to handle closing the modal when the overlay is clicked
  const handleOverlayClick = () => {
    toggleMemberModal();
  };

  // Prevent modal from closing when clicking inside modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={`member-modal ${!isMemberModalOpen && "hidden"}`}>
        {/* Overlay to detect outside click */}
        <div className="member-overlay" onClick={handleOverlayClick}></div>

        {/* Modal content with click propagation stopped */}
        <div className="modal-content" onClick={handleModalContentClick}>
          <div className="top">
            <div className="header">
              <Image src="/colored-logo.png" alt="MendAfrica Logo" width={30} height={30} />
              <h1>MENDAFRICA</h1>
            </div>
            <p>Becoming a member allows you access to the following...</p>
          </div>

          <div className="middle">
            <div className="box">
              <Image src="/clock.png" alt="Track impact" width={50} height={50} />
              <p>Track impact on your givings</p>
            </div>
            <div className="box">
              <Image src="/star.png" alt="Volunteer" width={50} height={50} />
              <p>Volunteer with MendAfrica</p>
            </div>
            <div className="box">
              <Image src="/rocket.png" alt="Community" width={50} height={50} />
              <p>Be a part of the online community</p>
            </div>
          </div>

          <div className="bottom">
            <button onClick={handleClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Member;
