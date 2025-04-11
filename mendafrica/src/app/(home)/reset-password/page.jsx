"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/actions/auth/reset-password";
import ComponentLevelLoader from "@/components/Loader";
import { toast } from "react-toastify";
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeSlashLight } from "react-icons/pi";
import "./styles.scss";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    setLoading(true);

    try {{}
      const response = await resetPassword(token, password);
      
      if (response.error) {
        toast.error(response.error);
      }

      if (response.success) {
        toast.success(response.success);
        // Redirect to login or home
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-form">
        <h1>Reset Password</h1>
        <p>Enter your new password below</p>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>New Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Enter new password"
              />
              <span 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <PiEyeSlashLight size={20} /> : <IoEyeOutline size={20} />}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                placeholder="Confirm new password"
              />
              <span 
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <PiEyeSlashLight size={20} /> : <IoEyeOutline size={20} />}
              </span>
            </div>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? <ComponentLevelLoader color={"#ffffff"} /> : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
} 