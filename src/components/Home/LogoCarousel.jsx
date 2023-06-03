import React from 'react';
import Image from 'next/image';
import logo from 'public/assets/logoCarousel/download.png';
import logo2 from 'public/assets/logoCarousel/download_1.png';
import logo3 from 'public/assets/logoCarousel/download_2.png';
import logo4 from 'public/assets/logoCarousel/download_3.png';
import { useState } from 'react';

function LogoCarousel() {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  return (
    <div id="logo_list" className="w-8/12 flex h-[200px] gap-5 justify-around items-center my-10">
      <Image
        src={logo}
        height={68}
        width={120}
        className={`object-contain cursor-pointer ${hoveredLogo === logo ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo)}
        onMouseLeave={() => setHoveredLogo(null)}
      />

      <Image
        src={logo2}
        height={68}
        width={120}
        className={`object-contain cursor-pointer ${hoveredLogo === logo2 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo2)}
        onMouseLeave={() => setHoveredLogo(null)}
      />

      <Image
        src={logo3}
        height={68}
        width={120}
        className={`object-contain cursor-pointer ${hoveredLogo === logo3 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo3)}
        onMouseLeave={() => setHoveredLogo(null)}
      />

      <Image
        src={logo4}
        height={68}
        width={120}
        className={`object-contain cursor-pointer ${hoveredLogo === logo4 ? '' : 'grayscale'}`}
        alt="..."
        onMouseEnter={() => setHoveredLogo(logo4)}
        onMouseLeave={() => setHoveredLogo(null)}
      />
    </div>
  );
}

export default LogoCarousel;
