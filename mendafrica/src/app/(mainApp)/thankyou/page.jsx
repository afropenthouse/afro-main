"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import './style.scss'
import { useDonationStore } from "@/store";
import ComponentLevelLoader from "@/components/Loader";
import { useState, useEffect } from "react";
import { createDonation } from "@/actions/project";
import { useRef } from "react";

export default function ThankYou() {
  const clearDonation = useDonationStore((state) => state.clearDonation);
  const [loading, setLoading] = useState(false);  
  const router = useRouter();
  const { userId, projectId, amount, currency } = useDonationStore();
  const hasCalledAPI = useRef(false);

  useEffect(() => {
    if (!userId) {
      // If userId is not present, set loading to true for 3 seconds
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        // Optionally, you can redirect the user or show an error message
        // router.push('/'); // Redirect to home or any other page
      }, 3000);

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }

    if (!hasCalledAPI.current && userId && projectId && amount && currency) {
      hasCalledAPI.current = true; // Mark as called
  
      // Round the amount to two decimal places, rounding up
      const roundedAmount = Math.ceil(amount * 100) / 100;
  
      setLoading(true);
      createDonation(userId, projectId, roundedAmount, currency)
        .then((donation) => {
          if (donation.success) {
            clearDonation();
          }
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId, projectId, amount, currency, clearDonation, router]);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="logo-container">
          <Image
            src="/colored-logo.png"
            alt="MendAfrica Logo"
            width={80}
            height={80}
            priority
          />
        </div>
        <h1>Thank You for Your Generosity!</h1>
        <div className="message">
          <p>Your payment to MendAfrica is being processed.</p>
          <p>You will receive a confirmation email once the transaction is complete.</p>
        </div>
        <button 
          className="return-button"
          onClick={() => router.push('/my-givings')}
        >
          {loading ? <ComponentLevelLoader color="#fff" /> : 'View My Givings'}
        </button>
      </div>
    </div>
  );
}