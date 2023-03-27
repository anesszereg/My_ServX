import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {gsap, Power3} from "gsap";


function WorkCategory() {
    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const title = useRef();
    const text = useRef();
    const cardContainer = useRef();
    const elementsRef = useRef([]);
    
    useEffect(() => {
        elementsRef.current.forEach((element, index) => {
            gsap.to(
              element,
              {
              x: 0,
              delay: index ,
              opacity: 1,
              duration: 0.5,
              ease: Power3.easeOut,
              scrollTrigger: elementsRef.current,}
              
            );
          });
        gsap.to(subtitle.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: subtitle.current
        })
        gsap.to(title.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: title.current
        })
        gsap.to(text.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text.current
        })
        gsap.to(cardContainer.current, {
            x: 0,
            delay: 0.5 ,
            opacity: 1,
            duration: 1.5,
            ease: Power3.easeOut,
            scrollTrigger: cardContainer.current
        })

    }, [])


    const work = [
        {
            title: 'Social Networking',
            url: '/assets/Work-categoy/icon-1.png'
        },
        {
            title: 'Digital Marketing',
            url: "/assets/Work-categoy/icon-2.png"
        },
        {
            title: 'Ecommerce Development',
            url: "/assets/Work-categoy/icon-3.png"
        },
        {
            title: 'Video Service',
            url: "/assets/Work-categoy/icon-4.png"
        }, {
            title: 'Banking Service',
            url: "/assets/Work-categoy/icon-5.png"
        }, {
            title: 'Enterprise Service',
            url: "/assets/Work-categoy/icon-6.png"
        }, {
            title: 'Education Service',
            url: "/assets/Work-categoy/icon-7.png"
        }, {
            title: 'Tour and Travels',
            url: "/assets/Work-categoy/icon-8.png"
        }, {
            title: 'Health Service',
            url: "/assets/Work-categoy/icon-9.png"
        }, {
            title: 'Event & Ticket',
            url: "/assets/Work-categoy/icon-10.png"
        }, {
            title: 'Restaurant  Service',
            url: "/assets/Work-categoy/icon-11.png"
        }, {
            title: 'Business Consultant',
            url: "/assets/Work-categoy/icon-12.png"
        }

    ]


    return (
        <div className=" bg_image lg:px-20 md:px-20 py-28  px-2 sm:px-5 w-full h-full bg-center bg-no-repeat bg-cover flex  justify-center   ">
            <div className=" flex lg:flex-row justify-center gap-10 items-center  flex-col">
                <div className=" flex flex-col gap-4 justify-center lg:items-start items-center lg:w-6/12 md:w-full ">
                    <p ref={title}
                        className="text-work  translate-y-4 opacity-0 font-normal text-lg  ">INDUSTRIES WE WORK FOR</p>
                    <div ref={subtitle}
                        className=' text-lg flex gap-3 justify-center md:text-4xl lg:text-[32px] lg:block text-work-card leading-tight translate-y-16 opacity-0  font-bold   lg:mb-10'>
                        <p>Helping</p>
                        <p>Businesses in All</p>
                        <p>
                            Domains
                        </p>
                    </div>
                    <p ref={text}
                        className="text-text-blog translate-y-16 text-lg opacity-0 lg:text-start text-sm text-center md:w-9/12 lg:w-full ">
                        Successfully delivered digital products Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div  className="w-8/12 sm:w-full  grid lg:grid-cols-4 lg:grid-rows-3  md:grid-rows-4  md:grid-cols-3 animation gap-6   grid-cols-2 "
                    >
                    {
                    work.map((item, index) => (

                        <div key={index}   className='opacity-0 translate-x-6' ref={el => elementsRef.current[index] = el}>

                                    <WorkCard item={item} />
                        
                       </div>
                    ))
                } </div>
            </div>

        </div>
    )
}

export default WorkCategory


// creating one card

const WorkCard = ({item}) => {

    // gsap.registerPlugin(ScrollTrigger);
    // const cardContainer = useRef();
    // useEffect(() => {
    // }, [])


    return (
        <div className="   flex flex-col justify-center border items-center border-text-blog  gap-3 backdrop-blur-xl rounded-xl  h-full w-full rounded-tr-md rounded-bl-md">
            <Image src={
                    item.url
                }
                alt=""
                //    fill
                width={70}
                height={70}/>
            <p className=" text-work-card font-normal text-center w-14 ">
                {
                item.title
            } </p>
        </div>
    )
}
