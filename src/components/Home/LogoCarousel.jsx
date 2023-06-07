import React, { useState } from 'react';
import Image from 'next/image';

import logo from 'public/assets/logoCarousel/download.png';
import logo2 from 'public/assets/logoCarousel/download_1.png';
import logo1 from 'public/assets/logoCarousel/download_4.png';
import logo3 from 'public/assets/logoCarousel/download_2.png';
import logo4 from 'public/assets/logoCarousel/download_3.png';
import logo5 from 'public/assets/logoCarousel/wing.png';

function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % logos.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + logos.length) % logos.length);
  };

  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handleLogoHover = (logo) => {
    setHoveredLogo(logo);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
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
      <div className="relative flex flex-col align-items overflow-hidden ">
      <p
          
          className="text-xl opacity-1 bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text "
        >
          Nos partenaires
        </p>
        <div
          className="flex w-9/12 justify-center transition-transform duration-300 ml-12"
          style={{ transform: `translateX(-${currentSlide * 9}%)` }}
        >
          {[logos[logos.length - 1], ...logos, logos[0]].map((logoItem, index) => (
            <div
              key={index}
              className="w-[250px] h-[120px] flex-shrink-0 flex justify-center items-center"
              onMouseEnter={() => handleLogoHover(logoItem.src)}
              onMouseLeave={handleLogoLeave}
            >
              <Image
                src={logoItem.src}
                alt={logoItem.alt}
                className={`opacity-1 cursor-pointer ${
                  hoveredLogo === logoItem.src ? '' : 'grayscale'
                }`}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        {logos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-300 ${
                index === currentSlide ? 'bg-gray-900' : 'bg-gray-400'
              }`}
              onClick={() => handleSlideChange(index)}
            />
          )).slice(0, 5)}
        </div>
        
      </div>
    </div>
  );
}

export default LogoCarousel;
