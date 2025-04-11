"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ComponentLevelLoader from "@/components/Loader";

const EachVenue = ({ venue }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`https://backend-vibeazy.fly.dev/admin/venue/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          venueId: venue.id,
        }),
      });

      if (response.ok) {
        toast.success("Venue deleted successfully");
        router.push("/venues");
      } else {
        toast.error("Failed to delete venue");
      }
    } catch (error) {
      toast.error("Error deleting venue");
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === venue.venueImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? venue.venueImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#650928] break-words max-w-[90%] sm:max-w-[60%]">
        {venue.venueName}
      </h1>
      
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-4 w-full sm:w-auto">
        <button
          onClick={() => router.push(`/venues/edit/${venue.id}`)}
          className="px-4 py-2 bg-[#650928] text-white rounded-lg hover:bg-[#4a0720] transition-colors text-sm sm:text-base w-full xs:w-auto"
        >
          Edit Venue
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base w-full xs:w-auto"
        >
          Delete Venue
        </button>
      </div>
    </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="relative aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden">
            {venue.venueImages.length > 0 ? (
              <>
                <Image
                  src={venue.venueImages[currentImageIndex]}
                  alt={venue.venueName}
                  fill
                  className="object-cover"
                />
                {venue.venueImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      →
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No images available</p>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-[#650928] mb-2">Price Range</h2>
                <p className="text-2xl font-bold">
                  ₦{venue.startAmount.toLocaleString()} - ₦{venue.endAmount.toLocaleString()}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#650928] mb-2">Rating</h2>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{venue.rating || 'N/A'}</span>
                  {venue.rating && <span className="text-gray-500 ml-2">/ 5</span>}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#650928] mb-2">Location</h2>
                <p className="text-gray-700">{venue.location.city}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#650928] mb-2">Category</h2>
                <p className="text-gray-700">{venue.category.category}</p>
              </div>

              {venue.webLink && (
                <div>
                  <h2 className="text-lg font-semibold text-[#650928] mb-2">Website</h2>
                  <a 
                    href={venue.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Delete Venue</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete {venue.venueName}? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                disabled={isDeleting}
              >
                {isDeleting ? <ComponentLevelLoader color="white"/> : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EachVenue;