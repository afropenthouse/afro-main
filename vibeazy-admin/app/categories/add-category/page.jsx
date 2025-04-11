"use client"
import React, { useState } from 'react';
import './styles.scss';
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
   
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
       
        if (!category || category === "") {
            toast.error("Please enter category name", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            setLoading(false);
            setError("Please enter category name");
      
            return;
          }
        
          
        const body = {
          category,
        };
        
        try {
          const res = await fetch(`https://backend-vibeazy.fly.dev/admin/category`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                category,
              }),
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
            toast.success("Category added successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
           return router.push('/categories')
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
                <h1>Add New Category</h1>
                
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Category Name</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Enter category name"
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
                            {loading ? 'Adding...' : 'Add Category'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;