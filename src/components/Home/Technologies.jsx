import { gsap, Power3 } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { BsFacebook, BsFillTagFill, BsLinkedin, BsMessenger, BsStopwatchFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
      title: "chaque projet  qui contient un serveur est géré avec node js!",
      text: "Pourquoi nous travaillons avec Node.js ? Vous connaissez l'architecture micro-service ? Venez le decouvrir ici",
      image: "/assets/blog/blog-dg-1.jpg",
      name :'Node js'
    },
    {
      title: "Nous Travaillons aussi avec laravel ",
      text: "Nos client exigent parfois  des technologies bien specifique comme le framework Laravel car ils préférent L'architecture MVC ,vounez  decouvrir quel est  le MVC",
      image: "/assets/blog/blog-dg-2.jpg",
      name :'Laravel '
    },
    {
      title: "Nous réalisons aussi des application mobiles IOS & Android",
      text: "vous savez que les application sont devenus aussi essentiels que les sites web ? et qu'il existe plusieurs facons d'en faire!  ",
      image: "/assets/blog/blog-dg-3.jpg",
      name :'Application Mobiles'
    },
  ];
  return (
    <section name="/blog" className=" w-full pb-16  sm:px-8 pt-28">
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
    <div  className="w-full gap-y-6 transition-transform duration-500 ease-out hover:-translate-y-4 outline outline-sky-100 shadow-lg rounded-xl  overflow-hidden group   relative flex flex-col items-start justify-between h-[33rem]">
      <div className="w-full h-72 relative flex justify-center  ">
        <Image src={item.image} fill className="object-cover object-center w-full h-full" />
      <div className=" flex justify-between items-center p-5 right-8 rounded-3xl  h-9  w-10/12 absolute -bottom-4 font-bold  bg-gradient-to-r  from-blog1 to-blog2 to-blog3   ">
        <div className="flex items-center  gap-1 justify-between text-white">
        <BsFillTagFill size={15} className="mt-2" color='#fff'/>
          <p>{item.name}</p>
        </div>
        <div className="flex align-center justify-center" >
          <BsStopwatchFill size={15} color='#fff'/>
        </div>
      </div>

      </div>
      <div className="h-full relative gap-y-3 w-full px-4 flex flex-col">
        <p className="text-2xl  text-indigo-900  font-bold">{item.title}</p>
        <p className="font-medium text-lg">{item.text}</p>
        <div className="absolute left-[50%] -translate-x-[50%] bottom-8 h-4 w-[calc(100%-2rem)] border-t border-t-gray-300"></div>
      </div>
      <div className="  flex  w-full items-center  gap-3  p-4 -mt-14   text-text-blog">
        <p className="text-xl font-semi-bold  "> Partages</p>
        <a href=""> <BsFacebook size={17} /></a>
        <a href=""><BsTwitter size={17}/></a>
        <a href=""><BsLinkedin size={17}/></a>
        <a href=""><MdEmail size={17}/></a>
        <a href=""><BsMessenger size={17}/></a>
       
        
        
        
        

      </div>
    </div>
  );
};
