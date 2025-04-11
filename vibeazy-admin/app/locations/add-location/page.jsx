"use client"
import React, { useState } from 'react';
import './styles.scss';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';

const AddLocation = () => {
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
   
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
       
        if (!location || location === "") {
            toast.error("Please enter location name", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            setLoading(false);
            setError("Please enter location name");
      
            return;
          }
        
          
        const body = {
          city:location,
        };

        try {
          const res = await fetch(
            `https://backend-vibeazy.fly.dev/admin/location`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          );
    
          const data = await res.json();
    
          if (res.status === 400) {
            toast.error(data.error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            return { error: data.error };
          }
    
          if (res.status === 201 || res.status === 200) {
            toast.success("Location added successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
           return router.push('/locations')
          }
    
          // Handle other status codes
          return { error: "An unexpected error occurred" };
        } catch (err) {
          console.error(err);
          return { error: "An error occurred while processing your request" };
        }
      };

    return (
        <div className="add-category-container">
            <div className="add-category-card">
                <h1>Add New Location</h1>
                
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="location">Location Name</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter location name"
                            // required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <div className="form-actions">
                        <button
                            type="button"
                           
                            className="cancel-btn"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={loading}
                        >
                            {loading ? 'Adding...' : 'Add Location'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddLocation;