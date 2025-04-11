"use client"
import React, { useState } from 'react';
import './styles.scss';

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const handleSubmit = async (e) => {
      
    };

    return (
        <div className="add-category-container">
            <div className="add-category-card">
                <h1>Adding DIscount to Ocean View Bar</h1>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Discount Percentage</label>
                        <input
                            type="text"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Enter Discount Percentage"
                            required
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
                            {loading ? 'Adding...' : 'Add Discount'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;