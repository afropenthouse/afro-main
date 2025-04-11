"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ComponentLevelLoader from "@/components/Loader";

const AddVenue = ({ categories, locations }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    categoryId: "",
    venueName: "",
    startAmount: "",
    endAmount: "",
    venueImages: [], // Changed from `venueImage` to `venueImages`
    accountNumber: "",
    bankName: "",
    rating: "",
    callLine: "",
    discount: "",
    longitude: "",
    latitude: "",
    locationId: "",
    webLink: "",
  });

  const router = useRouter()

  const [photos, setPhotos] = useState([]); // To handle multiple image files
  const [previewImages, setPreviewImages] = useState([]); // To store image previews

  const CLOUD_NAME = "du6g27tfh";
  const UPLOAD_PRESET = "brickwire";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const uploadImages = async () => {
    if (photos.length === 0) return [];

    const uploadedUrls = await Promise.all(
      photos.map(async (photo) => {
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
          return data["secure_url"];
        } catch (error) {
          console.error("Image upload failed:", error);
          return null;
        }
      })
    );

    // Filter out failed uploads
    return uploadedUrls.filter((url) => url !== null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      categoryId,
      venueName,
      startAmount,
      endAmount,
      discount,
      longitude,
      latitude,
      locationId,
      callLine,
      bankName,
      accountNumber,
      webLink,
      rating,
    } = formData;



    const uploadedImageUrls = await uploadImages();

    const body = {
      ...formData,
      accountNumber: '111111111',
      bankName: "Gtbank",
      callLine: "222222222",
      latitude: "222222",
      longitude: "333333333",
      venueImages: uploadedImageUrls, // Store multiple image URLs in `venueImages`
      startAmount: Number(startAmount),
      endAmount: Number(endAmount),
      discount: Number(discount),
      rating: Number(rating),
    };

    console.log(body)

    try {
      const res = await fetch(`https://backend-vibeazy.fly.dev/admin/venue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false)
        return { error: data.error };
      }

      if (res.ok) {
        toast.success("Venue added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setLoading(false)
        return router.push("/venues");
      }

      return { error: "An unexpected error occurred" };
    } catch (err) {
      console.error(err);
      return { error: "An error occurred while processing your request" };
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6">Add New Venue</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>

          <div className="mb-4">
            <label htmlFor="categoryId" className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleInputChange}
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="locationId" className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <select
              id="locationId"
              name="locationId"
              value={formData.locationId}
              onChange={handleInputChange}
              required
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="venueName" className="block text-gray-700 text-sm font-bold mb-2">
              Venue Name
            </label>
            <input
              type="text"
              id="venueName"
              name="venueName"
              value={formData.venueName}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="venueImages" className="block text-gray-700 text-sm font-bold mb-2">
              Venue Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {previewImages.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2">
                    {previewImages.map((preview, index) => (
                      <Image
                        key={index}
                        width={100}
                        height={100}
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="object-cover rounded"
                      />
                    ))}
                  </div>
                ) : (
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="venueImages"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload images</span>
                    <input
                      id="venueImages"
                      name="venueImages"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                      accept="image/*"
                      multiple
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Pricing</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="startAmount" className="block text-gray-700 text-sm font-bold mb-2">
                Start Amount
              </label>
              <input
                type="number"
                id="startAmount"
                name="startAmount"
                value={formData.startAmount}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="endAmount" className="block text-gray-700 text-sm font-bold mb-2">
                End Amount
              </label>
              <input
                type="number"
                id="endAmount"
                name="endAmount"
                value={formData.endAmount}
                onChange={handleInputChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="discount" className="block text-gray-700 text-sm font-bold mb-2">
              Rating
            </label>
            <input
              type="number"
              id="discount"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="discount" className="block text-gray-700 text-sm font-bold mb-2">
              Web Link
            </label>
            <input
              type="text"
              id="webLink"
              name="webLink"
              value={formData.webLink}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? <ComponentLevelLoader  color="white"/> : "Add Venue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVenue;

