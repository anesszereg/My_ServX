import Link from "next/link";
import { gsap,Power3 } from "gsap";
import { useEffect,useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import E_comerce from 'public/assets/services/online-shop.png' 
import Service from 'public/assets/services/worldwide-security.png' 
import Vitrines from 'public/assets/services/web-design.png' 
import Mobile from 'public/assets/services/chat.png' 
import Web from 'public/assets/services/layers.png' 
import Marketing from 'public/assets/services/marketing-mix.png' 
const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const subtitle = useRef();
  const title = useRef();
  const cardContainer = useRef();
  useEffect(() => {
    gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle.current})
    gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:title.current})
    gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
  }, [])
  const cards = [
    {
      title: "des sites E-commerce",
      text: "Nous créons et développons des sites e-commerce et des marketplaces professionnels, attractifs et prêts à générer des ventes.",
      link: "/marketting",
      icon: E_comerce,
      sub_text:'En savoir plus'
    },
    
    {
      title: "Services & Solutions de Sécurité Web",
      text: "Nous offrons une sécurité Complete, avec l'audit, protection, configuration, sauvegardes et programmes de sensibilisation.",
      link: "/Identité",
      icon: Service,
      sub_text:'En savoir plus'
    },
    
   
    {
      title: "des sites Vitrines",
      text: "Nous concevons et refondons des sites vitrines sur mesure a votre image et mettant en valeur votre marque.",
      link: "/marketting",
      icon: Vitrines,
      sub_text:'En savoir plus'
    },
      {
        title: "Développement d'applications mobiles",
        text: "Nous concevons et développons votre application mobile performante et personnalisée .",
        link: "/marketting",
        icon: Mobile,
        sub_text:'En savoir plus'
      },
    {
      title: "Application web / Logiciel web",
      text: "Nous vous accompagnons dans la création d’une application web ou logiciel web qui répond à vos objectifs.",
      link: "/marketting",
      icon: Web,
      sub_text:'En savoir plus'
    },
    {
      title: "Marketing / Référencement ",
      text: "Nous vous soutenons dans la réalisation de vos objectifs en marketing et référencement (SEO).",
      link: "/marketting",
      icon: Marketing,
      sub_text:'En savoir plus'
    }
  ];
  return (
    // outer most container
    <section id="services" className=" w-full px-8 py-16 ">
      <div className="h-full w-full overflow-hidden flex flex-col items-center gap-y-2 ">
        <p ref={subtitle} className="text-xl translate-y-4 opacity-0 bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text ">
         NOS SERVICES POPULAIRES
        </p>
        <h3 ref={title} className="sm:text-5xl translate-y-16 opacity-0 text-3xl text-center font-extrabold text-slate-900">Ce Que Nous Faisons </h3>
        {/* cards container */}
        <div ref={cardContainer} className="h-full p-4 opacity-0 translate-y-52 max-w-7xl w-full gap-12 [grid-template-columns:_repeat(_auto-fit,_minmax(14rem,_1fr)_);] sm:[grid-template-columns:_repeat(_auto-fit,_minmax(20rem,_1fr)_);] grid">
          {cards.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// creating one card component
const Card = ({ item }) => {
  return (
    <div className="md:h-96 h-80 relative  hover:-translate-y-3   group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl from-white to-white w-full px-2  sm:px-4 shadow-lg">
      <div className="h-full rounded-xl z-[0] opacity-0 transition-all druation-500 ease-in-out group-hover:opacity-100 absolute bg-gradient-to-tr from-purple-400 to-sky-400 w-full inset-0"></div>
      <div className="gap-y-4 relative z-[1] flex flex-col h-full items-center">
        <Image src={item.icon} alt='icon' width={80} height={80}/>
        
        <p className="sm:text-xl text-xl  transition-colors ease-in-out duration-75 group-hover:text-white text-work-card sm:w-72 text-center font-bold capitalize">{item.title}</p>
        <p className="md:text-lg font-bold text-center transition-colors ease-in-out duration-75 group-hover:text-white text-black">{item.text}</p>
        { /* <Link href={item.link}   className="md:text-xl text-lg  font-bold transition-colors ease-in-out duration-75 group-hover:text-white flex items-center  gap-2 text-work-card">
          {item.sub_text}  <AiOutlineRight size={15} className=" mt-1"/>
        </Link> */}

        {/**needs to be removed */} 
        <div className="md:text-xl text-lg  font-bold transition-colors ease-in-out duration-75 group-hover:text-white flex items-center  gap-2 text-work-card">
          {item.sub_text}  <AiOutlineRight size={15} className=" mt-1"/>
        </div>
      </div>
    </div>
  );
};
 