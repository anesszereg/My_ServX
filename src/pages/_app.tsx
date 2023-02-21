import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const intersectors = document.querySelectorAll(".intersect");
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.15;
      const ball = document.querySelector(".ball");
      const xSet = gsap.quickSetter(ball, "x", "px");
      const ySet = gsap.quickSetter(ball, "y", "px");
      const images = document.querySelectorAll(".movingImage");
      const xImageSet = gsap.quickSetter(images, "x", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        const offset = 40;
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        ySet(pos.y);
        
         xSet(pos.x);
          xImageSet(-pos.x/offset);
      });
      intersectors.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
          gsap.to(".ball div", { scale: 3, duration: 0.4 });
        });
        item.addEventListener("mouseleave", (e) => {
          gsap.to(".ball div", { scale: 1, duration: 0.4 });
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="ball pointer-events-none w-8 h-8 z-50 border grid place-items-center border-orange-200 absolute rounded-full bg-opacity-30">
        <div className="w-2 h-2 rounded-full  bg-orange-400"></div>
      </div>
      <Component {...pageProps} />
    </>
  );
}
