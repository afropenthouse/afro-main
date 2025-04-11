"use client";
import { useEffect, useState, useRef } from "react";
import { accessTokenStore, isauthmodalopenStore } from "@/store";
import VibeazyAuthModal from "./common/AuthModal";

const AuthGuard = ({ children }) => {
  const { accessToken } = accessTokenStore();
  const { isAuthModalOpen, setIsAuthModalOpen } = isauthmodalopenStore();
  const [isChecking, setIsChecking] = useState(true);
  const timerRef = useRef(null);
  
  // Clear any existing timer when unmounting
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    console.log("Access Token value:", accessToken, "Type:", typeof accessToken, "Truthy:", Boolean(accessToken));
    
    // Clear any existing timer first
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    if (!accessToken) {
      // Set a new timer only if we don't have a token
      timerRef.current = setTimeout(() => setIsAuthModalOpen(true), 9000);
    } else {
      // If we have a token, make sure modal is closed
      setIsAuthModalOpen(false);
    }
    
    setIsChecking(false);
  }, [accessToken, setIsAuthModalOpen]);

  return (
    <>
      {children}
      <VibeazyAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default AuthGuard;