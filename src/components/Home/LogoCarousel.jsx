import React, { useState, useRef } from 'react';
import Carousel from './Carousel';






function LogoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);
  const carouselRef = useRef(null);



  return (
    <div className="w-9/12 h-full mx-auto my-20">
      <div
        className="relative flex flex-col align-items "
        ref={carouselRef}>
        <p className="text-xl opacity-1 mb-[50px] select-none  text-center bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text">
          Nos partenaires
        </p>
        
              <Carousel/>
        
       
      </div>
    </div>
  );
}

export default LogoCarousel;
