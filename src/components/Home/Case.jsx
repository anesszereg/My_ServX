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

function Case() {
    const [show, setShow] = useState(true)

    return (
        <section id="case" className=" w-full px-8 py-16 text-slate-900 bg-[/images/wave.svg] bg-cover bg-center bg-no-repeat ">
            <div className="h-full w-full  flex flex-col items-center gap-y-2 ">
                <p className="text-xl   bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text ">
                    NOS SERVICES POPULAIRES
                </p>
                <h3 className="sm:text-5xl   text-3xl text-center font-extrabold text-slate-900">Ce Que Nous Faisons
                </h3>
                {/* cards container */}
                <div className="h-full p-4 mt-4  max-w-7xl w-full grid grid-cols-4 gap-12">
                    <div className="h-full w-full col-span-2 flex flex-col gap-3">
                        <p className="text-2xl   font-medium  text-black ">
                            WE ARE
                        </p>
                        <h3 className="sm:text-5xl   text-start font-semibold text-case"
                            style={
                                {
                                    fontSize: '75px',
                                    lineHeight: '75px'
                                }
                        }>MASTERS
                        </h3>
                        <div className="flex w-[250px] flex-row   overflow-hidden mt-4  rounded-md  border border-solid border-gray-300">
                            <div className={
                                    `switch ${
                                        show ? 'bg-gray-100':'bg-white'              
                                    } text-black px-4 py-2 w-full cursor-pointer flex justify-center items-center transition duration-400`
                                }
                                onClick={
                                    () => setShow(true)
                            }>
                                Masters
                            </div>
                            <div className={
                                    `switch ${
                                        show ? 'bg-white' :'bg-gray-100' 
                                    } text-black px-4 py-2  w-full cursor-pointer flex justify-center items-center transition duration-400`
                                }
                                onClick={
                                    () => setShow(false)
                            }>
                                trading solution
                            </div>
                        </div>
                    </div>
                    {
                    cards.map((item, index) => (
                        <CardCase item={item} 
                            key={index}
                            />
                    ))
                } 
                </div>

            </div>
        </section>
    )
}

export default Case


const CardCase = ({item}) => {
    return (
        <div className="md:h-96 h-80 relative  hover:-translate-y-3   group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl from-white to-white w-full px-2  sm:px-4 shadow-lg">
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
