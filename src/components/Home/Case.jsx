import Link from "next/link";
import {gsap, Power3} from "gsap";
import {useEffect, useRef, useState} from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {AiOutlineRight} from "react-icons/ai";
import Image from "next/image";
import E_comerce from 'public/assets/services/online-shop.png'
import Service from 'public/assets/services/worldwide-security.png'
import Vitrines from 'public/assets/services/web-design.png'
import Mobile from 'public/assets/services/chat.png'
import Web from 'public/assets/services/layers.png'
import Marketing from 'public/assets/services/marketing-mix.png'
import sql from 'public/assets/Case/iot.png'
import clouds from 'public/assets/Case/cloud-computing.png'
import Chat from 'public/assets/Case/chatbot.png'
import AR from 'public/assets/Case/ar-vr.png'
import IA from 'public/assets/Case/intelligence.png'
import AI from 'public/assets/Case/ai-machine.png'

const cards = [
    {
        title: "des sites E-commerce",
        text: "Nous créons et développons des sites e-commerce et des marketplaces professionnels, attractifs et prêts à générer des ventes.",
        link: "/marketting",
        icon: E_comerce,
        sub_text: 'En savoir plus'
    },

    {
        title: "Services & Solutions de Sécurité Web",
        text: "Nous offrons une sécurité Complete, avec l'audit, protection, configuration, sauvegardes et programmes de sensibilisation.",
        link: "/Identité",
        icon: Service,
        sub_text: 'En savoir plus'
    },


    {
        title: "des sites Vitrines",
        text: "Nous concevons et refondons des sites vitrines sur mesure a votre image et mettant en valeur votre marque.",
        link: "/marketting",
        icon: Vitrines,
        sub_text: 'En savoir plus'
    },
    {
        title: "Développement d'applications mobiles",
        text: "Nous concevons et développons votre application mobile performante et personnalisée .",
        link: "/marketting",
        icon: Mobile,
        sub_text: 'En savoir plus'
    }, {
        title: "Application web / Logiciel web",
        text: "Nous vous accompagnons dans la création d’une application web ou logiciel web qui répond à vos objectifs.",
        link: "/marketting",
        icon: Web,
        sub_text: 'En savoir plus'
    }, {
        title: "Marketing / Référencement ",
        text: "Nous vous soutenons dans la réalisation de vos objectifs en marketing et référencement (SEO).",
        link: "/marketting",
        icon: Marketing,
        sub_text: 'En savoir plus'
    }
];


const CARDS = [
    {
        title: "des sites E-commerce",
        text: "Nous créons et développons des sites e-commerce et des marketplaces professionnels, attractifs et prêts à générer des ventes.",
        link: "/marketting",
        icon: AR,
        sub_text: 'En savoir plus'
    },

    {
        title: "Services & Solutions de Sécurité Web",
        text: "Nous offrons une sécurité Complete, avec l'audit, protection, configuration, sauvegardes et programmes de sensibilisation.",
        link: "/Identité",
        icon: Chat,
        sub_text: 'En savoir plus'
    },


    {
        title: "des sites Vitrines",
        text: "Nous concevons et refondons des sites vitrines sur mesure a votre image et mettant en valeur votre marque.",
        link: "/marketting",
        icon: IA,
        sub_text: 'En savoir plus'
    },
    {
        title: "Développement d'applications mobiles",
        text: "Nous concevons et développons votre application mobile performante et personnalisée .",
        link: "/marketting",
        icon: AI,
        sub_text: 'En savoir plus'
    }, {
        title: "Application web / Logiciel web",
        text: "Nous vous accompagnons dans la création d’une application web ou logiciel web qui répond à vos objectifs.",
        link: "/marketting",
        icon: clouds,
        sub_text: 'En savoir plus'
    }, {
        title: "Marketing / Référencement ",
        text: "Nous vous soutenons dans la réalisation de vos objectifs en marketing et référencement (SEO).",
        link: "/marketting",
        icon: sql,
        sub_text: 'En savoir plus'
    }
];

function Case() {
    const [show, setShow] = useState(true)

    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const text = useRef();
    const title = useRef();
    const subtitle_2 = useRef();
    const cardContainer = useRef();
    const elementsRef = useRef([]);

    useEffect(() => {
        
        elementsRef.current.forEach((element, index) => {
            gsap.to(element, {
                y: 0,
                delay: index,
                opacity: 1,
                duration: 0.5,
                ease: Power3.easeOut,
                scrollTrigger: elementsRef.current
            })
        })
        gsap.to(text.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text.current
        })
        gsap.to(subtitle.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: subtitle.current
        })
        gsap.to(subtitle_2.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: subtitle_2.current
        })
        gsap.to(title.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: title.current
        })
        gsap.to(cardContainer.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: cardContainer.current
        })
    }, [])
    useEffect(() => {
        gsap.registerPlugin();
        
        if (show) {
          gsap.fromTo(
            elementsRef.current,
            { opacity: 0, y: 52 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
          );
        } else {
          gsap.fromTo(
            elementsRef.current,
            { opacity: 0, y: 52 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
          );
        }
      }, [show]);
    
  const toggleShow = () => {
    setTimeout(() => {
      setShow(!show);
    }, 500); // Delay of 500 milliseconds
  };



    return (
        <section id="case" className=" w-full px-8 py-16 text-slate-900 bg-[/images/wave.svg] bg-cover bg-center bg-no-repeat ">
            <div className="h-full w-full  flex flex-col items-center gap-y-2 ">
                <p className="text-xl   bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text ">
                    NOS SERVICES POPULAIRES
                </p>
                <h3 className="sm:text-5xl   text-3xl text-center font-extrabold text-slate-900">Ce Que Nous Faisons
                </h3>
                {/* cards container */}
                <div className="h-full p-4 mt-4  max-w-7xl w-full grid xl:grid-cols-4  md:grid-cols-2 max-sm:flex max-sm:flex-col gap-12">
                    <div className="h-full w-full col-span-2 flex flex-col gap-3 items-center xl:items-start">
                        <p ref={subtitle} className="text-2xl  opacity-0 translate-y-12 font-medium  text-black ">
                            WE ARE
                        </p>
                        <h3 ref={title} className="sm:text-5xl opacity-0 translate-y-12  text-start font-semibold text-case"
                            style={
                                {
                                    fontSize: '75px',
                                    lineHeight: '75px'
                                }
                        }>MASTERS
                        </h3>
                        <div className="flex md:w-4/12  xl:w-6/12 flex-row   overflow-hidden mt-4  rounded-md  border border-solid border-gray-300">
                            <div className={
                                    `switch ${
                                        show ? 'bg-gray-100' : 'bg-white'
                                    } text-black px-4 py-2 text-lg  cursor-pointer flex justify-center items-center transition duration-400  `
                                }
                                onClick={toggleShow}>
                                Masters
                            </div>
                            <div className={
                                    `switch ${
                                        show ? 'bg-white' : 'bg-gray-100'
                                    } text-black px-4 py-2 w-full text-lg  cursor-pointer flex justify-center items-center transition duration-400`
                                }
                                onClick={toggleShow}>
                                trading solution
                            </div>
                        </div>
                    </div>
                    {
                    show ? (cards.map((item, index) => (
                        <div  className='opacity-0 translate-y-52 xl:w-[300px] w-full'  key={index} ref={el => elementsRef.current[index] = el}  >

                        <CardCase item={item}
                            />
                            </div>
                    ))) : (CARDS.map((item, index) => (
                        <div  className='opacity-0 translate-y-52 xl:w-[300px] w-full '  key={index} ref={el => elementsRef.current[index] = el}  >

                        <CardCase item={item}
                            />
                            </div>
                    )))
                } </div>

            </div>
        </section>
    )
}

export default Case


const CardCase = ({item}) => {
    return (
        <div className="h-96  relative  hover:-translate-y-3   group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl from-white to-white w-full px-2  sm:px-4 shadow-lg">
            <div className="h-full rounded-xl z-[0] opacity-0 transition-all druation-500 ease-in-out group-hover:opacity-100 absolute bg-gradient-to-tr from-purple-400 to-sky-400 w-full inset-0"></div>
            <div className="gap-y-4 relative z-[1] flex flex-col h-full items-center">
                <Image src={
                        item.icon
                    }
                    alt='icon'
                    width={80}
                    height={80}/>

                <p className="sm:text-xl text-xl  transition-colors ease-in-out duration-75 group-hover:text-white text-work-card sm:w-72 text-center font-bold capitalize">
                    {
                    item.title
                }</p>
                <p className="md:text-lg font-bold text-center transition-colors ease-in-out duration-75 group-hover:text-white text-black">
                    {
                    item.text
                }</p>
                {/* <Link href={item.link}   className="md:text-xl text-lg  font-bold transition-colors ease-in-out duration-75 group-hover:text-white flex items-center  gap-2 text-work-card">
            {item.sub_text}  <AiOutlineRight size={15} className=" mt-1"/>
          </Link> */}

                {/**needs to be removed */}
                <div className="md:text-xl text-lg  font-bold transition-colors ease-in-out duration-75 group-hover:text-white flex items-center  gap-2 text-work-card">
                    {
                    item.sub_text
                }
                    <AiOutlineRight size={15}
                        className=" mt-1"/>
                </div>
            </div>
        </div>
    );
};
