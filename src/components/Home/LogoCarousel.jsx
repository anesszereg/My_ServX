import React, { useState, useRef } from 'react';
import Image from 'next/image';

import logo from 'public/assets/logoCarousel/download.png';
import logo2 from 'public/assets/logoCarousel/download_1.png';
import logo1 from 'public/assets/logoCarousel/download_4.png';
import logo3 from 'public/assets/logoCarousel/download_2.png';
import logo4 from 'public/assets/logoCarousel/download_3.png';
import logo5 from 'public/assets/logoCarousel/wing.png';

function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);
  const carouselRef = useRef(null);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleLogoHover = (logo) => {
    setHoveredLogo(logo);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
  };

  const handleDragStart = (e) => {
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e) => {
    const dragEndX = e.clientX;
    const diffX = dragEndX - dragStartX;

    if (diffX > 100) {
      // Scroll to the previous slide
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? logos.length - 1 : prevSlide - 1));
    } else if (diffX < -100) {
      // Scroll to the next slide
      setCurrentSlide((prevSlide) => (prevSlide === logos.length - 1 ? 0 : prevSlide + 1));
    }
  };

  const logos = [
    { src: logo, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
  ];

  return (
    <div className="w-9/12 h-[90px] mx-auto my-20">
      <div
        className="relative flex flex-col align-items overflow-hidden"
        ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
      >
        <p className="text-xl opacity-1 select-none  text-center bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text">
          Nos partenaires
        </p>
        <div
          className="flex w-9/12 select-none justify-center transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 35}%)` }}
        >
          {[...logos, ...logos, ...logos].map((logoItem, index) => (
            <div
              key={index}
              className="w-[250px] select-none h-[120px] flex-shrink-0 flex justify-center ml-6 items-center"
              onMouseEnter={() => handleLogoHover(logoItem.src)}
              onMouseLeave={handleLogoLeave}
            >
              <Image
                src={logoItem.src}
                alt={logoItem.alt}
                className={`opacity-1 select-none cursor-pointer pointer-events-none ${
                  hoveredLogo === logoItem.src ? '' : 'grayscale'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {logos.slice(0, 5).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-300 ${
                index === currentSlide ? 'bg-gray-900' : 'bg-gray-400'
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
