import Image from 'next/image'

import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap,Power3 } from "gsap";



function Philosophy() {

    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const title = useRef();
    const text = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const text4 = useRef();
    const text5 = useRef();
    const cardContainer = useRef();
    const cardContainer2 = useRef();
    const cardContainer3 = useRef();
    useEffect(() => {
      gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle.current})
      gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:title.current})
      gsap.to(text.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text.current})
      gsap.to(text2.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text2.current})
      gsap.to(text3.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text3.current})
      gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
      gsap.to(cardContainer2.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer2.current})
      gsap.to(cardContainer3.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer3.current})
    }, [])

    const content = [
        {
            title: 'SUPERVISION',
            subTitle: "L'excellence technique",
            text: "Nous sommes passionnés par la technologie et nous nous engageons à rester à la pointe de l'innovation. Nous nous efforçons de fournir des solutions web de qualité supérieure en utilisant les technologies les plus avancées et les meilleures pratiques du secteur.",
            url: '/assets/philo/leadership.jpg'
        }, {
            title: 'NOTRE FORCE',
            subTitle: 'Team Collaboration',
            text: 'Nous croyons que la collaboration est essentielle pour atteindre des résultats exceptionnels. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins, leurs objectifs et leurs attentes, afin de leur fournir des solutions web sur mesure qui répondent parfaitement à leurs exigences.',
            url: '/assets/philo/collaboration.jpg'
        }, {
            title: 'QUALITÈ',
            subTitle: 'Transparence & Integrité',
            text: 'Nous considérons que la transparence est essentielle pour maintenir une relation saine et productive avec nos clients, et nous nous engageons à fournir des informations claires et précises à nos clients sur chaque aspect de leur projet de site web.',
            text2: "Nous sommes fiers de notre réputation en matière d'intégrité et de transparence, et nous continuerons à travailler dur pour maintenir la confiance et la fidélité de nos clients.",
            url: '/assets/philo/transparency.jpg'
        },

    ]

    return (
        <div className='flex flex-col items-center justify-center py-28 px-6  lg:px:20 gap-3'>
            <p ref={title} className=' translate-y-4 opacity-0  text-work text-center  font-normal text-lg'>
                NOTRE PHILOSOPHIE</p>
            <p ref={subtitle} className=' translate-y-4 opacity-0  text-work-card leading-tight text-center font-bold lg:text-5xl  text-4xl mb-10'>NOTRE PHILOSOPHIE DE TRAVAIL</p>

            <div className="flex justify-center items-center lg:w-3/6  lg:flex-row flex-col  gap-16 w-9/12 h-9/12  mb-10">
                <div ref={cardContainer} className="flex  lg:h-5/12 lg:w-5/12 h-10/12 w-10/12 translate-y-4 opacity-0  ">

                    <Image src={
                            content[0].url
                        }
                        width={470}
                        height={530}
                        className=" rounded-xl h-full w-full"/>
                </div>
                <div ref={text2} className="flex flex-col gap-4 translate-y-4 opacity-0 justify-center items-center lg:items-start lg:w-3/6">
                    <p  className='text-work     font-normal text-lg'>
                        {
                        content[0].title
                    }</p>
                    <p className='text-work-card    leading-tight  font-bold text-5xl  mb-3'>
                        {
                        content[0].subTitle
                    }</p>
                    <p className='text-text-blog     text-lg  '>
                        {
                        content[0].text
                    }</p>

                </div>

            </div>
            <div className="flex gap-10 w-9/12 h-9/12 justify-center items-center lg:w-3/6  lg:flex-row flex-col-reverse mb-10">

                <div ref={text} className="flex  translate-y-4 opacity-0  flex-col gap-4 justify-center items-center lg:items-start lg:w-3/6 ">
                    <p className='   text-work   font-normal text-lgk'>
                        {
                        content[1].title
                    }</p>
                    <p className='   text-work-card leading-tight  font-bold text-5xl  mb-3'>
                        {
                        content[1].subTitle
                    }</p>
                    <p className='   text-text-blog  text-lg  '>
                        {
                        content[1].text
                    }</p>

                </div>
                <div ref={cardContainer2} className="flex shadow-2xl h-10/12 w-10/12 rounded-xl lg:h-5/12 lg:w-5/12  translate-y-4 opacity-0   ">

                    <Image src={
                            content[1].url
                        }
                        width={500}
                        height={500}
                        className=" rounded-xl  h-full w-full "/>
                </div>

            </div>
            <div className="flex gap-10  w-9/12 h-9/12 justify-center items-center lg:w-3/6  lg:flex-row  flex-col mb-10">
                <div className="flex  lg:h-5/12 lg:w-5/12 h-10/12 w-10/12 "ref={cardContainer3}>

                    <Image src={
                            content[2].url
                        }
                        width={500}
                        height={500}
                        className=" rounded-xl  h-full w-full"/>
                </div>
                <div ref={text3} className="flex flex-col  translate-y-4 opacity-0  gap-4 justify-center items-center lg:items-start lg:w-3/6">
                    <p className='text-work   font-normal text-lgk'>
                        {
                        content[2].title
                    }</p>
                    <p className='text-work-card leading-tight  font-bold text-5xl  mb-3'>
                        {
                        content[2].subTitle
                    }</p>
                    <p className='text-text-blog  text-lg  '>
                        {
                        content[2].text
                    }</p>
                    <p className='text-text-blog  text-lg  '>
                        {
                        content[2].text2
                    }</p>

                </div>

            </div>


        </div>
    )
}

export default Philosophy
