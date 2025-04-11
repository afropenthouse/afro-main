"use client"
import React, { useState } from 'react';
import Navbar from '@/components/navbar/minorNav/Navbar';

const GalleryImage = ({ image, onClick }) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg bg-gray-100"
      onClick={() => onClick(image)}
    >
      <div className="aspect-square relative">
        <img
          src={image.src}
          alt={image.alt || image.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />

        {/* Default overlay that disappears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-full">
            <h3 className="text-lg font-semibold">{image.title}</h3>
            <p className="text-sm opacity-90 mt-1">{image.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      title: 'Food Outreach',
      description: 'Serving Meals to 1000 Children in Yaba',
      src: '/slider3.png',
      alt: 'MendAfrica food outreach'
    },
    {
      id: 2,
      title: 'Medical Outreach',
      description: 'Medical Outreach Serving 300 People',
      src: '/mendddd.jpg',
      alt: 'MendAfrica medical outreach'
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-[5rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <GalleryImage 
              key={image.id} 
              image={image} 
              onClick={handleImageClick}
            />
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-[60vh] md:h-[70vh] bg-gray-100">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt || selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-3 text-gray-900">{selectedImage.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{selectedImage.description}</p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;