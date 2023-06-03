import Image from 'next/image'
import image1 from '/public/assets/Project/Image_1.jpg'
import image2 from 'public/assets/Project/image_2.jpg'
import image3 from 'public/assets/Project/image_3.jpg'
import image4 from 'public/assets/Project/Image_4.jpg'
import image5 from 'public/assets/Project/Image5.jpg'
import image6 from 'public/assets/Project/image_6.jpg'
import {gsap, Power3} from "gsap";
import {useEffect, useRef, useState} from "react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"


const CARDS = [
    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image1

    },

    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image2

    },


    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image3

    },
    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image4

    }, {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image5

    }, {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image6

    }
];

function PortfolioSection() {

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
                // y: 0,
                height:510,
                delay: index,
                opacity: 1,
                duration: 1,
                ease: Power3.easeOut,
                scrollTrigger: {
                  trigger: elementsRef.current,
                  start: "top bottom-=100",
                  end: "bottom center",
                  toggleActions: "play none none reset",
                },
            })
        })

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
        gsap.to(cardContainer.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: cardContainer.current
        })
    }, [])


    return (
        <section id="Portfolio" className=" mt-20 h-full w-full px-8 py-16 text-slate-900  bg-cover bg-center bg-no-repeat bg-black ">
            <div className="h-full w-full  flex flex-col items-center gap-y-2 ">
                <p className="text-[17px]  tracking-[7px] font-sans  bg-gradient-to-r font-medium text-transparent text-white">
                    PORTFOLIO
                </p>
                <h3 className="sm:text-5xl h-36 mt-5 font-sans w-full flex flex-col font-medium text-[48px] text-center font-extrabold text_graidient">
                    Our Recent Web Design &
                    <span className='mt-[-23px]'></span>
                    <br/>
                    Some Past Projects.
                </h3>
                {/* cards container */}
                <div className=" p-4 mt-4 h-[1110px]  max-w-[1220px] w-full grid grid-cols-3 grid-rows-2  gap-3  ">

                    {
                    CARDS.map((item, index) => (
                        <div className='opacity-0   h-0 '
                            key={index}
                            ref={
                                el => elementsRef.current[index] = el
                        }
                        >

                            <Card item={item}/>
                        </div>
                    ))
                } </div>

            </div>
        </section>
    )
}

export default PortfolioSection


const Card = ({item}) => {
 
  const cardRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(cardRef.current, {
      height: 463,
      opacity: 1,
      duration: 0.5,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  
    return (

        <div  className="h-full w-full   flex flex-col gap-2    transition-all duration-500 ease-in-out  ">
            <div className="w-[370px] h-[463px] overflow-hidden ">
                <Image
                
                src={
                        item.link
                    }
                    alt='image'
                    width={370}
                    height={463}
                    className='hover:scale-110 hover:transition-transform hover:duration-300'
                    />
            </div>
            <div className="flex flex-col gap-2 items-center ">
                <p className="text-[18px]  transition-colors ease-in-out duration-75 text-white sm:w-72 text-center font-bold capitalize">
                    {
                    item.title
                }</p>
                <p className="  text-[13px] tracking-[1px] font-bold text-center transition-colors ease-in-out duration-75 text-gray-500 ">
                    {
                    item.sub_title
                }</p>

            </div>
        </div>
    )


}
