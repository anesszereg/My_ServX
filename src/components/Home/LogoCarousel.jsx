import React from 'react';
import Image from 'next/image';
import logo from 'public/assets/logoCarousel/download.png';
import logo2 from 'public/assets/logoCarousel/download_1.png';
import logo1 from 'public/assets/logoCarousel/download_4.png';
import logo3 from 'public/assets/logoCarousel/download_2.png';
import logo4 from 'public/assets/logoCarousel/download_3.png';
import {gsap, Power3} from "gsap";
import {useEffect, useRef, useState} from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


function LogoCarousel() {


  gsap.registerPlugin(ScrollTrigger)
  const logo_1 = useRef();
  const logo_2 = useRef();
  const logo_3 = useRef();
  const logo_4 = useRef();
  const logo_5 = useRef()

  useEffect(() => {
        
    
    gsap.to(logo_1.current, {
        y: 0,
        delay: 0.2,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut,
        scrollTrigger: logo_1.current
    })
    gsap.to(logo_2.current, {
        y: 0,
        delay: 0.6,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut,
        scrollTrigger: logo_2.current
    })
    gsap.to(logo_3.current, {
        y: 0,
        delay: 1.2,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut,
        scrollTrigger: logo_3.current
    })
    gsap.to(logo_4.current, {
        y: 0,
        delay: 2,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut,
        scrollTrigger: logo_4.current
    })
    gsap.to(logo_5.current, {
        y: 0,
        delay: 2.6,
        opacity: 1,
        duration: 1,
        ease: Power3.easeOut,
        scrollTrigger: logo_5.current
    })
}, [])
  const [hoveredLogo, setHoveredLogo] = useState(null);

  return (
    <div id="logo_list" className="w-8/12 flex h-[90px] gap-9 justify-around items-center my-20">
      <Image
      ref={logo_1}
        src={logo}
        height={90}
        width={80}
        className={`  opacity-0 transition-y-15 object-cover cursor-pointer ${hoveredLogo === logo ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo)}
        onMouseLeave={() => setHoveredLogo(null)}
      />

      <Image
      ref={logo_2}
        src={logo2}
        height={90}
        width={80}
        className={` opacity-0 transition-y-15 object-cover cursor-pointer ${hoveredLogo === logo2 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo2)}
        onMouseLeave={() => setHoveredLogo(null)}
      />

      <Image
      ref={logo_3}
        src={logo3}
        height={90}
        width={80}
        className={` opacity-0 transition-y-15 object-cover cursor-pointer ${hoveredLogo === logo3 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo3)}
        onMouseLeave={() => setHoveredLogo(null)}
      />

      <Image
      ref={logo_4}
        src={logo4}
        height={90}
        width={80}
        className={` opacity-0 transition-y-15 object-cover cursor-pointer ${hoveredLogo === logo4 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo4)}
        onMouseLeave={() => setHoveredLogo(null)}
      />
      <Image
      ref={logo_5}
        src={logo1}
        height={90}
        width={80}
        className={` opacity-0 transition-y-15 object-cover cursor-pointer ${hoveredLogo === logo4 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo4)}
        onMouseLeave={() => setHoveredLogo(null)}
      />
    </div>
  );
}

export default LogoCarousel;
