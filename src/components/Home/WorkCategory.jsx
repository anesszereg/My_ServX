import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap,Power3 } from "gsap";


function WorkCategory() {
    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const title = useRef();
    const text = useRef();
    useEffect(() => {
      gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle.current})
      gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:title.current})
      gsap.to(text.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text.current})
    }, [])
  


    const work = [
        {
            title:'Social Networking',
            url:'/assets/Work-categoy/icon-1.png'
        },
        {
            title:'Digital Marketing',
            url:"/assets/Work-categoy/icon-2.png"
        }   , 
        {
            title:'Ecommerce Development',
            url:"/assets/Work-categoy/icon-3.png"
        },
        {
            title:'Video Service',
            url:"/assets/Work-categoy/icon-4.png"
        },
        {
            title:'Banking Service',
            url:"/assets/Work-categoy/icon-5.png"
        },
        {
            title:'Enterprise Service',
            url:"/assets/Work-categoy/icon-6.png"
        },
        {
            title:'Education Service',
            url:"/assets/Work-categoy/icon-7.png"
        },
        {
            title:'Tour and Travels',
            url:"/assets/Work-categoy/icon-8.png"
        }   ,     
        {
            title:'Health Service',
            url:"/assets/Work-categoy/icon-9.png"
        },
        {
            title:'Event & Ticket',
            url:"/assets/Work-categoy/icon-10.png"
        }   , 
        {
            title:'Restaurant  Service',
            url:"/assets/Work-categoy/icon-11.png"
        },
        {
            title:'Business Consultant',
            url:"/assets/Work-categoy/icon-12.png"
        }
    
    ]




  return (
    <div className=" bg_image  py-28 w-full h-full bg-center bg-no-repeat bg-cover ">
        <div className="flex justify-around items-center ">
            <div className=" flex flex-col gap-4 w-80 ">
               <p ref={title} className="text-work  translate-y-4 opacity-0 font-normal text-lg " >INDUSTRIES WE WORK FOR</p> 
                <p ref={subtitle} className=' text-work-card leading-tight translate-y-16 opacity-0  font-bold text-5xl  mb-10'>
                Helping Businesses in All Domains
                </p>
                <p ref={text} className="text-text-blog translate-y-16 opacity-0 ">
                Successfully delivered digital products Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
                {
                    work.map((item , index)=>(
                        <WorkCard item={item} key={index} />
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default WorkCategory


// creating one card 

const WorkCard = ({item}) => {

    gsap.registerPlugin(ScrollTrigger);
    const cardContainer = useRef();
    useEffect(() => {
      gsap.to(cardContainer.current,{x:0,delay:0.5,opacity:1,duration:1.5,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
    }, [])


    return (
        <div ref={cardContainer} className="  opacity-0 translate-x-4 flex flex-col justify-center border items-center border-text-blog  gap-3 backdrop-blur-lg rounded-xl  h-40 w-40 rounded-tr-md rounded-bl-md">
                <Image src={item.url} alt="" 
            //    fill
            width={70}
            height={70} />
                <p className=" text-work-card font-normal text-center w-14 ">
                    {item.title}
                </p>
        </div>
    )
}