import { useEffect, useState } from "react";

const images = [
  "/assets/Case/restro-app-1.jpg",
  "/assets/Case/restro-app-2.jpg",
  "/assets/Case/restro-app-3.jpg",
  "/assets/Case/restro-app-4.jpg",
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const displayedImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="flex items-center justify-center w-[390px] h-screen">
      {displayedImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel Image ${index}`}
          className="w-full h-10/12 object-cover "
          style={{
            transform:
              index === 0
                ? "translateX(-10%)"
                : index === 2
                ? "translateX(10%)"
                : "none",
            transition: "transform 0.5s ease-in-out", // Added transition property
          }}
        />
      ))}
    </div>
  );
};

export default CarouselComponent;
