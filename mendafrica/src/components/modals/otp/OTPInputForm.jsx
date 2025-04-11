"use client";
import "./styles.scss";
import { LiaKeySolid } from "react-icons/lia";
import OtpInput from "@/components/OtpInput";
import { useModalStore, useOtpStore } from "@/store";
import ComponentLevelLoader from "@/components/Loader";
import { useState } from "react";
import { newVerification } from "@/actions/auth/newVerification";
import { ToastContainer, toast } from "react-toastify";
import { resendVerificationEmail } from "@/actions/auth/resend-verification";
import { useSignUpEmailStore } from "@/store";

function OTPInputForm() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const { isOtpModalOpen, toggleOtpModalOpen, toggleIsemailVerificationSuccessOpen } = useModalStore();
  const { token, setToken } = useOtpStore();
  const { email } = useSignUpEmailStore()

  const onOtpSubmit = (otp) => {
    console.log("OTP received:", otp);
    setToken(otp); // Save the OTP token to Zustand store
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!token) {
      toast.error("Token Missing", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    try {
      const data = await newVerification(token);

      if (data.success) {
        toast.success("Email successfully verified", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        toggleOtpModalOpen();
        toggleIsemailVerificationSuccessOpen();
        return;
      }

      throw new Error("Verification failed");
    } catch (error) {
      toast.error("Something went wrong during verification", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    const response = await resendVerificationEmail(email); // Make sure you have access to the email
    setLoading(false);
    
    if (response.error) {
      // Handle error (maybe show toast)
      toast.error(response.error);
    }
    
    if (response.success) {
      // Handle success (maybe show toast)
      toast.success(response.success);
    }
  };

  return (
    <>
      <div className={`otp-modal ${!isOtpModalOpen && "hidden"}`}>
        <div className="otp-overlay"></div>
        <div className="modal-content">
          <div className="top">
            <div className="header">
              <div className="icon">
                <LiaKeySolid size={35} />
              </div>
              <h1>Enter OTP Code</h1>
            </div>
            <p>Input the 4-digit OTP code sent to your email</p>
            {/* <p>obisesan249@gmail.com</p> */}
          </div>
          <div className="middle">
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
          <div className="bottom">
            <button onClick={handleSubmit}>
              {loading ? <ComponentLevelLoader color={"#ffffff"} /> : "Verify my email"}
            </button>
            <div className="resend-section">
              <p>Didn't receive the email?</p>
              <p>Check spam folder</p>
              <button 
                className="resend-button" 
                onClick={handleResend}
                disabled={loading}
              >
                {loading ? <ComponentLevelLoader color={"#ffffff"} /> : "Resend"}
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default OTPInputForm;
