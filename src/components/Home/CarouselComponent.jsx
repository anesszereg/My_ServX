import { useEffect, useState, useRef } from "react";
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from 'public/assets/Case/restro-app-1.jpg';
import logo3 from 'public/assets/Case/restro-app-2.jpg';
import logo4 from 'public/assets/Case/restro-app-3.jpg';
import logo5 from 'public/assets/Case/restro-app-4.jpg';


const images = [
  {
    src: logo1,
  },
  {
    src: logo5,
  },
  {
    src: logo3,
  },
  {
    src: logo4,
  }
];

const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 3, // Set the number of images to show at a time
  slidesToScroll: 1, // Set the number of images to scroll at a time
  centerMode: true,
  autoplay: true, 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }
  ]
};

const CarouselComponent = () => {
  return (
    <Slider {...settings}>
      {/* <div className="w-9/10 flex "> */}

      {images.map((i, index) => (
        <div key={index} className="h-[770px] ml-5  flex-shrink-0 w-[358px] flex justify-center items-center">
          <Image src={i.src} alt="h" height={770} width={358}  />
        </div>
      ))}
          {/* </div> */}
    </Slider>
  );
};

export default CarouselComponent;
