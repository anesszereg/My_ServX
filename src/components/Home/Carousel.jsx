import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from 'public/assets/logoCarousel/download.png';
import logo2 from 'public/assets/logoCarousel/download_1.png';
import logo1 from 'public/assets/logoCarousel/download_4.png';
import logo3 from 'public/assets/logoCarousel/download_2.png';
import logo4 from 'public/assets/logoCarousel/download_3.png';
import logo5 from 'public/assets/logoCarousel/wing.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        centerMode: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
      }
    }]
};

function Carousel() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const logos = [
    { src: logo, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
  ];

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div
          key={index}
          className='w-[240px] h-[80px] flex flex-shrink-0 overflow-hidden ml-4 justify-center items-center'
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(-1)}
        >
          <div className={`image-container ${hoveredIndex === index ? '' : 'grayscale'}`}>
            <Image src={logo.src} alt={logo.alt} layout='fill' objectFit='contain' />
          </div>
          <style jsx>{`
            .image-container {
              width: 240px;
              height: 80px;
              position: relative;
              overflow: hidden;
            }
            
            .grayscale {
              filter: grayscale(100%);
            }
            
            .slick-list {
              height: 100px;
            }
            
            .slick-slide {
              height: 100px;
            }
          `}</style>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
