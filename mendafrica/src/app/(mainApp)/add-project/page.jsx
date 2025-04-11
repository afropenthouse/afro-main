"use client";
import { addProject } from "@/actions/project";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";

function Add({}) {
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const CLOUD_NAME = "du6g27tfh";
  const UPLOAD_PRESET = "brickwire";
  const responseType = {
    error: "error",
    success: "success",
  };

 

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

 

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const imageUrl = await uploadImage();

    const { title, about, partner, category, image, goal, achievedGoal } =
      formData || {};
  
      const body = {
        
        ...formData,
        image: imageUrl,
        amountPerImpact: 0,
        achievedGoal: 66,
        goal: 77,
      };

    
    // console.log(body)

    addProject(body)
      .then((user) => {
        if (user.success) {
          // console.log(user.success);
          toast.success(user.success, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          toggleSignUpModal()
          toggleVerificationModal()
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

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle closing the modal when the overlay is clicked
  const handleOverlayClick = () => {
    toggleSignUpModal();
  };

  // Prevent modal from closing when clicking inside modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={``}>
        {/* Overlay to detect outside click */}
        <div className="" onClick={handleOverlayClick}></div>

        {/* Modal content with click propagation stopped */}
        <div className="" onClick={handleModalContentClick}>
          <div className="top">
            <h1>Sign up to MendAfrica</h1>
            <p>Sign Up with your email & phone number</p>
            <div className="google">
              <FcGoogle size={20} />
              <h3>Continue with Google</h3>
            </div>
            <div className="or">OR</div>
          </div>
          <form className="form">
          <div className="first">
                <h2>Title</h2>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
              <div className="first">
                <h2>About</h2>
                <input
                  type="text"
                  placeholder="about"
                  name="about"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="first">
                <h2>amountPerImpact</h2>
                <input
                  type="text"
                  placeholder="amountPerImpact"
                  name="amountPerImpact"
                  onChange={handleChange}
                />
              </div> */}
              <div className="first">
                <h2>Partner</h2>
                <input
                  type="text"
                  placeholder="partner"
                  name="partner"
                  onChange={handleChange}
                />
              </div>
              <div className="first">
                <h2>Category</h2>
                <input
                  type="text"
                  placeholder="category"
                  name="category"
                  onChange={handleChange}
                />
              </div>
              <div className="first">
                <h2>Image</h2>
                <input
                  type="file"
                  placeholder="image"
                  name="image"
                  id="image"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              
            <button onClick={handleFormSubmit}>SUBMITTTTT</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
