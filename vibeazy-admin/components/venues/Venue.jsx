"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Plus, Star } from 'lucide-react';
import './styles.scss';
import Image from 'next/image';
import ComponentLevelLoader from '../Loader';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";

const VenueCards = ({venues, categories, locations}) => {
  // console.log(cate, loca)
  const searchParams = useSearchParams();
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam).trim();
      setCategoryFilter(decodedCategory);
    }

    const locationParam = searchParams.get('location');
    if (locationParam) {
      const decodedLocation = decodeURIComponent(locationParam).trim();
      setLocationFilter(decodedLocation);
    }
  }, [searchParams]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
const [venueToDelete, setVenueToDelete] = useState(null);

const handleDeleteClick = (id) => {
  setVenueToDelete(id);
  
  setIsDeleteModalOpen(true);
};

const confirmDelete = async () => {
  // Perform deletion logic here (e.g., API call to delete the venue)
  console.log(`Venue with ID ${venueToDelete} deleted`);
  setLoading(true);

  try {
    const res = await fetch(`https://backend-vibeazy.fly.dev/admin/venue/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        venueId: venueToDelete,
      }),
    });
  
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
  
    if (res.status === 200 || res.status === 204) {
      toast.success("Venue deleted successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return { success: true }; // Optionally redirect or refresh the page
    }
  
    // Handle other status codes
    return { error: "An unexpected error occurred" };
  } catch (err) {
    console.error(err);
    toast.error("An error occurred while processing your request", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return { error: "An error occurred while processing your request" };
  }finally{
    setLoading(false);
    setIsDeleteModalOpen(false);
    router.push('/venues');
  }
  
  
};
  
  // Extract unique categories and locations
  // const categories = [...new Set(venues.map(venue => venue.category.category))];
  // const locations = [...new Set(venues.map(venue => venue.location.city))];
  
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount);
  };

  const filteredVenues = venues.filter(venue => {
    const categoryMatch = !categoryFilter || 
      venue.category.category.trim() === categoryFilter;
    const locationMatch = !locationFilter || 
      venue.location.city === locationFilter;
    return categoryMatch && locationMatch;
  });

  return (
    <div className="venues-container">
  {filteredVenues.length > 0 ? filteredVenues.map((venue) => (
    <Link key={venue.id} href={`venues/${venue.id}`} className="venue-card">
      {venue.discount > 0 && (
        <div className="discount-badge">
          {venue.discount}% OFF
        </div>
      )}
      <div className="venue-image">
        <Image
          src={venue.venueImages[0]}
          alt={venue.venueName}
          width={200}
          height={200}
        />
        <div className="venue-rating">
          <Star size={16} fill="#FFD700" color="#FFD700" />
          <span>{venue.rating}</span>
        </div>
      </div>
      
      <div className="venue-content">
        <h3 className="venue-name">{venue.venueName}</h3>
        
        <div className="venue-info">
          <div className="venue-category">
            <span>{venue.category.category}</span>
          </div>
          <div className="venue-location">
            <span>{venue.location.city}</span>
          </div>
        </div>
        <div className="venue-price">
          <div className="price-range">
            <span>From: {formatAmount(venue.startAmount)}</span>
            <span>To: {formatAmount(venue.endAmount)}</span>
          </div>
        </div>
        
        {/* Edit and Delete Buttons */}
        <div className="venue-actions">
          <button 
            className="edit-btn bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => window.location.href = `/venues/edit/${venue.id}`}
          >
            Edit
          </button>
          <button 
            className="delete-btn bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleDeleteClick(venue.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Link>
  )) : (
    <div className="text-center text-2xl font-bold">No venues found</div>
  )}

{isDeleteModalOpen && (
  <div className="delete-modal">
    <div className="modal-content">
      <h2>Are you sure you want to delete this venue?</h2>
      <div className="modal-actions">
        <button 
          className="confirm-btn bg-red-500 text-white px-4 py-2 rounded"
          onClick={confirmDelete}
        >
         {loading ? <ComponentLevelLoader color="white" /> : "Yes, delete"}
        </button>
        <button 
          className="cancel-btn bg-gray-300 px-4 py-2 rounded"
          onClick={() => setIsDeleteModalOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}
</div>
  );


};

export default VenueCards;