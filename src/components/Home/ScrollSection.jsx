import Image from 'next/image'
import E_comerce from 'public/assets/services/online-shop.png'
import Service from 'public/assets/services/worldwide-security.png'
import Vitrines from 'public/assets/services/web-design.png'
import Mobile from 'public/assets/services/chat.png'
import Web from 'public/assets/services/layers.png'
import Marketing from 'public/assets/services/marketing-mix.png'
import line from 'public/assets/ScrollSection/process-line-1.png'
import line2 from 'public/assets/ScrollSection/process-line-2.png'
import line3 from 'public/assets/ScrollSection/process-line-3.png'
import {RxCornerBottomLeft} from 'react-icons/rx'
import {RxCornerBottomRight} from 'react-icons/rx'
import {RxCornerTopLeft} from 'react-icons/rx'
import {RxCornerTopRight} from 'react-icons/rx'
import  { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap,Power3 } from "gsap";

function ScrollSection() {
    gsap.registerPlugin(ScrollTrigger);
  
    const cardContainer = useRef();
    const cardContainer_2 = useRef();
    const cardContainer_3 = useRef();
  
    useEffect(() => {
    
      gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
      gsap.to(cardContainer_2.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer_2.current})
      gsap.to(cardContainer_3.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer_3.current})
    }, [])
  
  return (
    <div className=' h-full bg-cover bg-center w-full flex justify-center items-center flex-col px-40 py-40 bg-gradient-to-b from-purple-600 to-blue-400 '>
        <div className="flex flex-col justify-center items-center">
        <div ref={cardContainer} className="flex opacity-0 translate-y-10  flex-col w-full h-full gap-3 ml-32 ">
            <div className="relative w-3/12 h-3/12 p-5 flex flex-col items-center justify-center gap-3 p-5">
                {/* <div className="flex ab justify-between">
                </div> */}
                    <RxCornerTopLeft size={35} className='absolute top-0 left-0 text-white'/>
                    <RxCornerTopRight size={35} className='absolute top-0 right-0 text-white' />
                    <RxCornerBottomLeft size={35} className='absolute bottom-0 left-0 text-white'/>
                    <RxCornerBottomRight size={35} className='absolute bottom-0 right-0 text-white' />
                <Image src={Vitrines} alt='' width={80} height={80}/>
                
                <p className='text-2xl text-teal-50 font-semibold tracking-wider'>title</p>
                <p className='text-md text-teal-50 text-center w-11/12'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorem repellendus iste voluptatem saepe quo labore perferendis, eaque ratione ipsam accusamus qui maxime harum et, velit nemo unde maiores officiis?</p>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <Image src={line2} alt='' width={600}    />
        </div>
        <div ref={cardContainer_2} className=" opacity-0 translate-y-10 flex flex-col w-full h-full gap-3 items-end mr-32">
        <div className="relative w-3/12 h-3/12 p-5 flex flex-col items-center justify-center gap-3 p-5">
        <RxCornerTopLeft size={35} className='absolute top-0 left-0 text-white'/>
                    <RxCornerTopRight size={35} className='absolute top-0 right-0 text-white' />
                    <RxCornerBottomLeft size={35} className='absolute bottom-0 left-0 text-white'/>
                    <RxCornerBottomRight size={35} className='absolute bottom-0 right-0 text-white' />
                <Image src={Marketing} alt='' width={80} height={80}/>
                
                <p className='text-2xl text-teal-50 font-semibold tracking-wider'>title</p>
                <p className='text-md text-teal-50 text-center w-11/12'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorem repellendus iste voluptatem saepe quo labore perferendis, eaque ratione ipsam accusamus qui maxime harum et, velit nemo unde maiores officiis?</p>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <Image src={line} alt='' width={600}  />
        </div>
        <div ref={cardContainer_3} className=" opacity-0 translate-y-10 flex flex-col w-full h-full gap-3 ml-40">
        <div className="relative w-3/12 h-3/12 p-5 flex flex-col items-center justify-center gap-3 p-5">
                {/* <div className="flex ab justify-between">
                </div> */}
                    <RxCornerTopLeft size={35} className='absolute top-0 left-0 text-white'/>
                    <RxCornerTopRight size={35} className='absolute top-0 right-0 text-white' />
                    <RxCornerBottomLeft size={35} className='absolute bottom-0 left-0 text-white'/>
                    <RxCornerBottomRight size={35} className='absolute bottom-0 right-0 text-white' />
                <Image src={Service} alt='' width={80} height={80}/>
                
                <p className='text-2xl text-teal-50 font-semibold tracking-wider'>title</p>
                <p className='text-md text-teal-50 text-center w-11/12'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorem repellendus iste voluptatem saepe quo labore perferendis, eaque ratione ipsam accusamus qui maxime harum et, velit nemo unde maiores officiis?</p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default ScrollSection