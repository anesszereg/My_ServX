import Image from "next/image";
import { gsap } from "gsap";
import { useEffect } from "react";
const MovingPhones = () => {
    useEffect(() => {
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const mouse = { x: pos.x, y: pos.y };
        // const speed = 0.15;
        // const xSet = gsap.quickSetter(ball, "x", "px");
        // const ySet = gsap.quickSetter(ball, "y", "px");
        // window.addEventListener("mousemove", (e) => {
        //   mouse.x = e.x;
        //   mouse.y = e.y;
        // });
        // gsap.ticker.add(() => {
        //     // adjust speed for higher refresh monitors
        //     const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        //     pos.x += (mouse.x - pos.x) * dt;
        //     pos.y += (mouse.y - pos.y) * dt;
        //     xSet(pos.x);
        //     ySet(pos.y);
        //   });
    }, [])
    
  const images = [
    { url: "/assets/laptop.webp", rate: 1 ,small:false},
    { url: "/assets/laptop2.png", rate: 1 ,small:false},
    { url: "/assets/phone.png", rate: 1 ,small:true},
    { url: "/assets/tablet.webp", rate: 1 ,small:true},
    { url: "/assets/tablet2.webp", rate: 1 ,small:true},
    { url: "/assets/tablet3.webp", rate: 1 ,small:true},
  ];
  return (
  <div className="absolute overflow-hidden z-[1] flex items-end  justify-end w-full h-full pt-20 left-[10%] top-0 ">
    
    </div>);
};

export default MovingPhones;
