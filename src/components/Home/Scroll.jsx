import React, { useEffect, useState, useRef } from 'react';

const Scroll = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef(null);
  const carouselWidth = 1130; // Adjust the width of the carousel container
  const imageTranslate = 375; // Adjust the translation value for each image
  const transitionDuration = 0.7; // Adjust the animation duration (in seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Adjust the delay (in milliseconds) between each image transition

    return () => clearInterval(interval);
  }, [images]);

 

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.style.transition = `transform ${transitionDuration}s ease-in-out`;
    }
  }, [currentImageIndex]);

  return (
    <div className="carousel-container flex justify-center">
      <div className="w-9/12 h-full p-4">
        <div className="carousel" style={{ width: `${carouselWidth}px`, overflow: 'hidden' }}>
          <div className="carousel-inner flex" ref={carouselRef} >
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  style={{
                    width: `${carouselWidth}px`,
                    transform: `translateX(-${index * imageTranslate}px)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
