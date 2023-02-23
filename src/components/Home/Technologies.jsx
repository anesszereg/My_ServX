import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
const Technologies = () => {
  gsap.registerPlugin(ScrollTrigger);
  const subtitle = useRef();
  const title = useRef();
  const cardContainer = useRef();
  useEffect(() => {
    gsap.to(subtitle.current, {
      y: 0,
      delay: 0.2,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: subtitle.current,
    });
    gsap.to(title.current, {
      y: 0,
      delay: 0.2,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: title.current,
    });
    gsap.to(cardContainer.current, {
      y: 0,
      delay: 0.2,
      opacity: 1,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: cardContainer.current,
    });
  }, []);
  const cards = [
    {
      title: "Nodejs",
      text: "Pourquoi nous travaillons avec Node.js ? Vous connaissez l'architecture micro-service ? Venez le decouvrir ici",
      image: "/assets/blog/blog-dg-1.jpg",
    },
    {
      title: "No PHP",
      text: "ios, design, Responsive",
      image: "/assets/blog/blog-dg-2.jpg",
    },
    {
      title: "Chicken fries",
      text: "ios, design, Responsive",
      image: "/assets/blog/blog-dg-3.jpg",
    },
  ];
  return (
    <section className=" w-full pb-16  sm:px-8 pt-28">
      <div className="h-full w-full gap-y-6 flex flex-col items-center">
        <p
          ref={subtitle}
          className="text-xl translate-y-4 opacity-0 bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text "
        >
          TECHNOLOGIES
        </p>
        <h3
          ref={title}
          className="sm:text-5xl max-w-3xl translate-y-16 opacity-0 text-3xl text-center font-extrabold text-slate-900"
        >
          Les Frameworks avec lesquels nous travaillons
        </h3>
        {/* cards container */}
        <div
          ref={cardContainer}
          className="h-full p-4 opacity-0 translate-y-52 max-w-7xl w-full grid gap-6 lg:gap-12 [grid-template-columns:_repeat(_auto-fit,_minmax(14rem,_1fr)_);] sm:[grid-template-columns:_repeat(_auto-fit,_minmax(20rem,_1fr)_);] "
        >
          {cards.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;

const Card = ({ item }) => {
  return (
    <div className="w-full gap-y-6 transition-transform duration-500 ease-out hover:-translate-y-4 outline outline-sky-100 shadow-lg rounded-xl  overflow-hidden group   relative flex flex-col items-start justify-between h-[33rem]">
      <div className="w-full h-72 relative">
        <Image src={item.image} fill className="object-cover object-center w-full h-full" />
      </div>
      <div className="h-full relative gap-y-6 w-full px-4 flex flex-col">
        <p className="text-2xl text-slate-900  font-bold">{item.title}</p>
        <p className="font-medium text-lg">{item.text}</p>
        <div className="absolute left-[50%] -translate-x-[50%] bottom-8 h-4 w-[calc(100%-2rem)] border-t border-t-gray-300"></div>
      </div>
    </div>
  );
};
