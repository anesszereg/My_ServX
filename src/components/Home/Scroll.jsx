import React, { useEffect, useState } from 'react';

const Scroll = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Adjust the delay (in milliseconds) between each image transition

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel-container flex justify-center">
      <div className="w-9/12 h-full p-4 flex">
        <div className="carousel flex gap-4 overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className={`carousel-image ${
                index === currentImageIndex ? 'active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
