"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Sample images - in real usage, these would be passed as props
  const images = [
    {
      id: 1,
      src: "/bridgewaters/amr1.jpg",
      alt: "Gallery image 1",
    },
    {
      id: 2,
      src: "/bridgewaters/amr2.jpg",
      alt: "Gallery image 2",
    },
    {
      id: 3,
      src: "/bridgewaters/amr3.jpg",
      alt: "Gallery image 3",
    },
    {
      id: 4,
      src: "/bridgewaters/amr4.jpg",
      alt: "Gallery image 4",
    },
    {
      id: 5,
      src: "/bridgewaters/amr5.jpg",
      alt: "Gallery image 5",
    },
    {
      id: 6,
      src: "/bridgewaters/amr6.jpg",
      alt: "Gallery image 6",
    },
    {
      id: 7,
      src: "/bridgewaters/p7.jpg",
      alt: "Gallery image 7",
    },
    {
      id: 8,
      src: "/bridgewaters/p8.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 9,
      src: "/bridgewaters/p9.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 10,
      src: "/bridgewaters/p10.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 11,
      src: "/bridgewaters/p11.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 12,
      src: "/bridgewaters/p12.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 13,
      src: "/bridgewaters/p13.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 14,
      src: "/bridgewaters/p14.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 15,
      src: "/bridgewaters/p15.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 16,
      src: "/bridgewaters/p16.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 17,
      src: "/bridgewaters/p17.jpg",
      alt: "Gallery image 8",
    },
    {
      id: 18,
      src: "/bridgewaters/p18.jpg",
      alt: "Gallery image 8",
    },
  ];
  const openLightbox = (imageId) => {
    setSelectedImage(imageId);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex].id);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          navigateImage("prev");
          break;
        case "ArrowRight":
          navigateImage("next");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, selectedImage]);

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-24">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-4 aspect-h-3">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openLightbox(image.id)}
                    className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Current image */}
              <Image
                src={images.find((img) => img.id === selectedImage)?.src}
                alt={images.find((img) => img.id === selectedImage)?.alt}
                width={500}
                height={500}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
