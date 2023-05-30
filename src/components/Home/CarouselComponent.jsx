import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import image_1 from 'public/assets/Case/restro-app-1.jpg'
import image_2 from 'public/assets/Case/restro-app-2.jpg'
import image_3 from 'public/assets/Case/restro-app-3.jpg'
import image_4 from 'public/assets/Case/restro-app-4.jpg'
import Image from 'next/image';

const CarouselComponent = () => {
  return (
    <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true}>
      <div>
        <Image src={image_1} alt="Image 1" width={100} height={100}/>
      </div>
      <div>
        <Image src={image_2} alt="Image 2" width={100} height={200}/>
      </div>
      <div>
        <Image src={image_3} alt="Image 3" width={100} height={200}/>
      </div>
      <div>
        <Image src={image_4} alt="Image 4" width={100} height={200}/>
      </div>
      <div>
        <img src="/path/to/image5.jpg" alt="Image 5" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
