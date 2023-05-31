import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import back_end from 'public/assets/Case/back.svg'
import front_end from 'public/assets/Case/branding.svg'
import UX_UI from 'public/assets/Case/logo-and-branding.svg'
import SEO from 'public/assets/Case/seo.svg'
import { Power3, gsap } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




const Cards = [
    {
        title:'UI/UX Design ',
        icon:UX_UI
    },
    
    {
        title:'Front-end Dev ',
        icon:front_end
    },
    
    {
        title:'Back-end Dev ',
        icon:back_end
    },
    
    {
        title:'SEO Optimization',
        icon:SEO
    },
    
]


function HowWeWork() {
    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const text = useRef();
    const title = useRef();
    const subtitle_2 = useRef();
    const cardContainer = useRef();
    const elementsRef = useRef([]);
  
    useEffect(() => {
      elementsRef.current.forEach((element, index) => {
          gsap.to(
            element,
            {
            y:0,
            delay: index ,
            opacity: 1,
            duration: 0.5,
            ease: Power3.easeOut,
            scrollTrigger: elementsRef.current,}
            
          )})
      gsap.to(text.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text.current})
      gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle.current})
      gsap.to(subtitle_2.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle_2.current})
      gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:title.current})
      gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
    }, [])
  
    return (
        <div className='flex align-center justify-center bg-gradient-to-b from-rose-100 to-rose-50  h-full w-full py-28 px-20  mb-10'>
            <div className="flex flex-col gap-3 w-8/12 ">
                <p ref={subtitle} className='text-work  opacity-0 translate-y-5  font-normal text-xl'>
                    SOLUTION</p>
                <p ref={title} className='text-work-card leading-tight  font-bold  opacity-0 translate-y-5 text-[44px] mb-8 opacity-1 translate-y-4 '>How We WorK</p>
                <p  ref={subtitle_2} className='text-work-card leading-tight  opacity-0 translate-y-5 font-bold lg:text-4xl text-[22px] mb-3 opacity-1 translate-y-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p ref={text} className='text-text-blog  opacity-0 translate-y-5 text-xl w-11/12 opacity-1 translate-y-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui aperiam rerum. Illum distinctio iusto commodi incidunt recusandae illo rem labore ea, nihil ipsa ab et numquam, laboriosam enim inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque provident at quis est impedit, autem error cumque temporibus ab corrupti recusandae possimus ullam optio aspernatur illum similique animi quia.</p>

                <div  className="flex gap-6 items-center w-10/12 flex-col md:flex-row lg:flex-row mt-16">
                    {

                        Cards.map((item , index)=>(
                            <div className='opacity-0 translate-x-6' key={index}  ref={el => elementsRef.current[index] = el}>

                            <CardWork   item={item} />
                            </div>
                        ))
                    }
                    </div>
            </div>

        </div>
    )
}

export default HowWeWork



const CardWork = ({item}) => {
    return (
        <div className=" h-[150px] w-[260px] relative    group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl bg-white  w-full px-2  sm:px-4 shadow-lg border border-solid border-gray-300 hover:translate-y-[-10px] transition duration-500">
           
            <div className="gap-y-4 relative z-[1] flex flex-col h-full items-center">
                <Image src={
                        item.icon
                    }
                    alt='icon'
                    width={80}
                    height={80}/>

                <p className="sm:text-xl text-4xl  transition-colors ease-in-out duration-75  text-work-card sm:w-72 text-center font-bold capitalize">
                    {
                    item.title
                }</p>
                
           
            </div>
        </div>
    );
};
