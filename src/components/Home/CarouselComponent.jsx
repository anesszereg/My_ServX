import { useEffect, useState, useRef } from "react";

const images = [
  "/assets/Case/restro-app-1.jpg",
  "/assets/Case/restro-app-2.jpg",
  "/assets/Case/restro-app-3.jpg",
  "/assets/Case/restro-app-4.jpg",
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

 

  const handleDragStart = (e) => {
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e) => {
    const dragEndX = e.clientX;
    const diffX = dragEndX - dragStartX;

    if (diffX > 100) {
      // Scroll to the previous image
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 500); // Delay before translating the images
    } else if (diffX < -100) {
      // Scroll to the next image
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Delay before translating the images
    }
  };

  const displayedImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div
      className="flex items-center justify-center h-screen select-none "
      ref={carouselRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {/* Show three images on large screens */}
      <div className="hidden md:flex">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="w-full h-10/12 object-cover  cursor-pointer pointer-events-none"
            style={{
              transform:
                index === 0
                  ? "translateX(-10%)"
                  : index === 2
                  ? "translateX(10%)"
                  : "none",
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            }}
          />
        ))}
      </div>

      {/* Show two images on medium screens */}
      <div className="hidden sm:flex md:hidden">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="w-full h-10/12 object-cover select-none cursor-pointer pointer-events-none"
            style={{
              transform: index === 1 ? "translateX(10%)" : "none",
              transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            }}
          />
        ))}
      </div>

      {/* Show one image on small screens */}
      <div className="sm:flex md:hidden">
        {displayedImages.slice(1, 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index}`}
            className="w-full h-10/12 object-cover select-none cursor-pointer pointer-events-none"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
