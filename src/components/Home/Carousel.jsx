import React from 'react';
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
  slidesToScroll: 2,
  centerMode: true,
  variableWidth: true,
};

function Carousel() {
  const logos = [
    { src: logo, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
  ];

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index} className='w-[200px] h-[80px] flex flex-shrink-0  ml-4 mb-5 justify-center items-center'>
          <div className='image-container'>
            <Image src={logo.src} alt={logo.alt} layout='fill' objectFit='contain' />
          </div>
          <style jsx>{`
            .image-container {
              width: 200px;
              height: 80px;
              position: relative;
              marginLeft:20px
            }
          `}</style>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
