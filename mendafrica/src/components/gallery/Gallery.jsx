import React from 'react';

const ImageGrid = ({ }) => {

    const images = [
        { url: "/1.jpg", alt: "Sample 1" },
        { url: "/2.jpg", alt: "Sample 2" },
        { url: "/3.jpg", alt: "Sample 3" },
        { url: "/4.jpg", alt: "Sample 4" },
       
      ];
  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 md:p-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-[5/4] rounded-lg">
          <img
            src={image.url || "/api/placeholder/250/200"}
            alt={image.alt || `Image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;