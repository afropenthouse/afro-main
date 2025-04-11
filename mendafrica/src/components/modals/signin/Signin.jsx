"use client";
import { useState } from "react";
import "./styles.scss";
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeSlashLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { useModalStore } from "@/store";
import ComponentLevelLoader from "@/components/Loader";
import { login } from "@/actions/auth/login";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useAuthStore } from "@/store";
import { unstable_update } from "@/auth";

function SignIn({}) {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const { isSignInModalOpen, toggleSignInModal, toggleSignUpModal, toggleForgotPasswordModalOpen } = useModalStore();
  const router = useRouter()
  const { data: session, update } = useSession();
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle closing the modal when the overlay is clicked
  const handleOverlayClick = () => {
    toggleSignInModal();
  };

  // Prevent modal from closing when clicking inside modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const {  email, password } =
      formData || {};



    if (!email) {
      toast.error("Please enter email", {
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

    if (!password) {
      toast.error("Please choose a password!", {
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

    if (!isValidEmail(email || "")) {
      toast.error("Email is invalid", {
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

    const body = {
      ...formData,
    };
    
    console.log(body)

    login(body)
      .then((user) => {
        if (user.success) {
          console.log(user.success);
          toggleSignInModal()
          router.push('/my-givings')
        }
        toast.error(user.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .finally(() => {
        setLoading(false);
        console.log("finally activated");
      });
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={`signin-modal ${!isSignInModalOpen && "hidden"}`}>
        {/* Overlay to detect outside click */}
        <div className="signin-overlay" onClick={handleOverlayClick}></div>

        {/* Modal content with click propagation stopped */}
        <div className="modal-content" onClick={handleModalContentClick}>
          <div className="top">
            <h1>Welcome back!</h1>
            {/* <p>Please enter your login details</p> */}
            <div style={{
              cursor: 'pointer'
            }} className="google" onClick={() => {
            signIn("google");
          }}>
              <FcGoogle size={20} />
              <h3>Continue with Google</h3>
            </div>
            <div className="or">OR</div>
          </div>
          <form className="form">
            <div className="others">
              <div className="formHolder">
                <h2>Email</h2>
                <div className="input">
                  <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />
                </div>
              </div>
              <div className="formHolder password">
                <h2>Password</h2>
                <div className="input">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter Your Password" 
                    name="password" 
                    onChange={handleChange} 
                  />
                  <button 
                    onClick={togglePasswordVisibility}
                    className="password-toggle"
                  >
                    {showPassword ? <PiEyeSlashLight /> : <IoEyeOutline />}
                  </button>
                </div>
                <div className="forgot-password">
                  <span 
                    onClick={() => {
                      toggleSignInModal();
                      toggleForgotPasswordModalOpen()
                    }}
                  >
                    Forgot password?
                  </span>
                </div>
              </div>
              <div className="bottom">
                <button onClick={handleFormSubmit}>{loading ? <ComponentLevelLoader color={'#ffffff'} /> : 'Sign In'}</button>
                <p>
                  Don't have an account? <span onClick={() => {
                    toggleSignInModal()
                    toggleSignUpModal()
                  }} style={{
                    cursor: 'pointer'
                  }}>Sign Up</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
