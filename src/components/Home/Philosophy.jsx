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
            subTitle: 'Leadership',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            url: '/assets/philo/leadership.jpg'
        }, {
            title: 'STRENGTH',
            subTitle: 'Team Collaboration',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            url: '/assets/philo/collaboration.jpg'
        }, {
            title: 'QUALITY',
            subTitle: 'Transparency & Integrity',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            url: '/assets/philo/transparency.jpg'
        },

    ]

    return (
        <div className='flex flex-col py-28 px-28 gap-3'>
            <p ref={title} className=' translate-y-4 opacity-0  text-work text-center  font-normal text-lgk'>
                OUR PHILOSOPHY</p>
            <p ref={subtitle} className=' translate-y-4 opacity-0  text-work-card leading-tight text-center font-bold text-5xl  mb-10'>Our Business Philosophy</p>

            <div className="flex gap-10 h-full w-full mb-10">
                <div ref={cardContainer} className="flex  translate-y-4 opacity-0  ">

                    <Image src={
                            content[0].url
                        }
                        width={470}
                        height={530}
                        className=" rounded-3xl"/>
                </div>
                <div ref={text2} className="flex flex-col gap-4 translate-y-4 opacity-0 justify-center w-3/6">
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
            <div className="flex gap-10 h-full w-full mb-10">

                <div ref={text} className="flex  translate-y-4 opacity-0  flex-col gap-4 justify-center w-3/6 ">
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
                <div ref={cardContainer2} className="flex shadow-2xl rounded-3xl  translate-y-4 opacity-0   ">

                    <Image src={
                            content[1].url
                        }
                        width={500}
                        height={500}
                        className=" rounded-3xl  "/>
                </div>

            </div>
            <div className="flex gap-10 h-full w-full mb-10">
                <div className="flex "ref={cardContainer3}>

                    <Image src={
                            content[2].url
                        }
                        width={500}
                        height={500}
                        className=" rounded-3xl"/>
                </div>
                <div ref={text3} className="flex flex-col  translate-y-4 opacity-0  gap-4 justify-center w-3/6">
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

                </div>

            </div>


        </div>
    )
}

export default Philosophy
