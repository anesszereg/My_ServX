import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.15;
      const images = document.querySelectorAll(".movingImage");
      const fastImages = document.querySelectorAll(".fastImage");
      const xImageSet = gsap.quickSetter(images, "x", "px");
      const xFastImage = gsap.quickSetter(fastImages, "x", "px");
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        const offset = 10;
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xImageSet(-pos.x / offset);
        xFastImage(-pos.x / (offset / 2));
      });
      
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
