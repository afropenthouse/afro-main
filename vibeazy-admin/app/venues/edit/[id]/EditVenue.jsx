"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ComponentLevelLoader from "@/components/Loader";
import { X } from "lucide-react";

const EditVenue = ({ categories, locations, venueData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    categoryId: "",
    venueName: "",
    startAmount: "",
    endAmount: "",
    venueImages: [],
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

  const router = useRouter();
  const [photos, setPhotos] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  const CLOUD_NAME = "du6g27tfh";
  const UPLOAD_PRESET = "brickwire";

  useEffect(() => {
    if (venueData) {
      const { location, category, ...rest } = venueData; // Exclude location
      setFormData({
        ...rest,
        categoryId: venueData.categoryId || "",
        locationId: venueData.locationId || "",
      });
      setExistingImages(venueData.venueImages || []);
    }
  }, [venueData]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(prev => [...prev, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(prev => [...prev, ...newPreviews]);
  };

  const removeExistingImage = (indexToRemove) => {
    setExistingImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const removeNewImage = (indexToRemove) => {
    setPreviewImages(prev => prev.filter((_, index) => index !== indexToRemove));
    setPhotos(prev => prev.filter((_, index) => index !== indexToRemove));
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

    return uploadedUrls.filter((url) => url !== null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const uploadedImageUrls = await uploadImages();
    const allImages = [...existingImages, ...uploadedImageUrls];

    const body = {
      ...formData,
      venueImages: allImages,
      startAmount: Number(formData.startAmount),
      endAmount: Number(formData.endAmount),
      discount: Number(formData.discount),
      rating: Number(formData.rating),
    };

    try {
      const res = await fetch(`https://backend-vibeazy.fly.dev/admin/venue/edit/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error);
        return;
      }

      toast.success("Venue updated successfully");
      router.push("/venues");
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while updating the venue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6">Edit Venue</h1>

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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Existing Images
            </label>
            <div className="grid grid-cols-3 gap-2 mb-4">
            {existingImages.map((image, index) => (
            <div key={index} className="relative">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Venue ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeExistingImage(index)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-lg transition-colors"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
           {previewImages.length > 0 && previewImages.map((image, index) => (
            <div key={index} className="relative">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Venue ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeNewImage(index)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 shadow-lg transition-colors"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
            </div>

            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add New Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
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
            <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="webLink" className="block text-gray-700 text-sm font-bold mb-2">
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
            {loading ? <ComponentLevelLoader color="white"/> : "Update Venue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVenue;