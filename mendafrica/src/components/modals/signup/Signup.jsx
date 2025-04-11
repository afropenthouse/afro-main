"use client";
import { useState } from "react";
import "./styles.scss";
import { IoEyeOutline } from "react-icons/io5";
import { PiEyeSlashLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { useModalStore } from "@/store";
import { ToastContainer, toast } from "react-toastify";
import ComponentLevelLoader from "@/components/Loader";
import { register } from "@/actions/auth/register";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useSignUpEmailStore } from "@/store";

function SignUp({}) {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const { isSignUpModalOpen, toggleSignUpModal, toggleSignInModal, toggleIsemailVerificationPromptOpen,  toggleOtpModalOpen, toggleVerificationModal } = useModalStore();
  const { setEmail } = useSignUpEmailStore()
  const [showPassword, setShowPassword] = useState(false);

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

    const { firstName, lastName, phone, email, password } =
      formData || {};

    if (!firstName) {
      toast.error("Please fill in your First Name", {
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

    if (!lastName) {
      toast.error("Please fill in your Last Name", {
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
    if (!phone) {
      toast.error("Please enter phone number", {
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

    setEmail(email)

    const body = {
      ...formData,
    };
    
    console.log(body)

    register(body)
      .then((user) => {
        if (user.success) {
          console.log(user.success);
          toast.success(user.success, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          toggleSignUpModal()
          toggleOtpModalOpen()
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

  // Function to handle closing the modal when the overlay is clicked
  const handleOverlayClick = () => {
    toggleSignUpModal();
  };

  // Prevent modal from closing when clicking inside modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={`signup-modal ${!isSignUpModalOpen && "hidden"}`}>
        {/* Overlay to detect outside click */}
        <div className="signup-overlay" onClick={handleOverlayClick}></div>

        {/* Modal content with click propagation stopped */}
        <div className="modal-content" onClick={handleModalContentClick}>
          <div className="top">
            <h1>Sign up to MendAfrica</h1>
            {/* <p>Sign Up with your email & phone number</p> */}
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
            <div className="name">
              <div className="first">
                <h2>First Name</h2>
                <input
                  type="text"
                  placeholder="Samson"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="last">
                <h2>Last Name</h2>
                <input
                  type="text"
                  placeholder="Balogun"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="others">
              <div className="formHolder">
                <h2>Email</h2>
                <div className="input">
                  <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange} />
                </div>
              </div>
              <div className="formHolder">
                <h2>Phone Number</h2>
                <div className="input">
                  <input type="text" placeholder="Enter Your Phone Number"name="phone" onChange={handleChange} />
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
              </div>
              <div className="bottom">
                <button onClick={handleFormSubmit}>{loading ? <ComponentLevelLoader color={'#ffffff'} /> : 'Sign up'}</button>
                <p>
                  Already have an account? <span onClick={() => {
                    toggleSignUpModal()
                    toggleSignInModal()
                  }} style={{
                    cursor: 'pointer'
                  }}>Sign In</span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
