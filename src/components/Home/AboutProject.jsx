import Image from 'next/image'
import React, {useEffect, useRef} from 'react'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {gsap, Power3} from "gsap";
import CountUp from 'react-countup';
import andriod from 'public/assets/Case/android.svg'
import apple from 'public/assets/Case/apple.svg'
import windows from 'public/assets/Case/windows.svg'


function AboutProject() {


    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const big_title = useRef();
    const title = useRef();
    const text = useRef();
    const text2 = useRef();
    const text3 = useRef();
    const text4 = useRef();
    const text5 = useRef();
    const cardContainer = useRef();
    const icon_1 = useRef();
    const icon_2= useRef();
    const icon_3 = useRef();
    useEffect(() => {
        gsap.to(subtitle.current, {
            y: 0,
            delay: 0.2,
            opacity:1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: subtitle.current
        })
        gsap.to(text.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text.current
        })
        gsap.to(text2.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text2.current
        })
        gsap.to(text3.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text3.current
        })
        gsap.to(text4.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text4.current
        })
        gsap.to(text5.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: text5.current
        })
        gsap.to(title.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: title.current
        })
        gsap.to(big_title.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: big_title.current
        })
        gsap.to(cardContainer.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: cardContainer.current
        })
        gsap.to(icon_1.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: icon_1.current
        })
        gsap.to(icon_2.current, {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: icon_2.current
        })
        gsap.to(icon_3.current, {
            y: 1,
            delay: 0.2,
            opacity: 1,
            duration: 1,
            ease: Power3.easeOut,
            scrollTrigger: icon_3.current
        })
    }, [])


    return (
        <div className="bg_about_company flex flex-col justify-center items-center h-full w-full py-28 px-16 max-sm:px-0 gap-10  mb-10 ">
             <p ref={big_title}
                className = 'text-work  opacity-0 translate-y-5  font-bold text-5xl' > OUR PROJECT </p>
                <div className="bg_about_company flex  lg:flex-row flex-col  justify-center items-center h-full w-full py-28 px-16 gap-10  mb-10 ">

               
            <div className="flex  opacity-0 translate-y-8  lg:w-4/6 w-full  mb-5 "
                ref={cardContainer}>
                <Image src='/assets/Case/app-intro.png'
                    width={450}
                    height={450}
                    className=' flex h-full w-full'/>
            </div>
            <div className="flex flex-col w-full text-center lg:text-start lg:items-start items-center gap-4  lg:h-2/6">
                {
                <p ref = {
                    title
                }
                className = 'text-work  opacity-0 translate-y-8  font-normal text-lg' > ABOUT THE PROJECT </p>
            }
                <p ref={subtitle}
                    className='text-work-card leading-tight  font-bold lg:text-5xl text-[28px] mb-3 opacity-0 translate-y-4 '>On-Demand Food Delivery Application</p>
                <p ref={text}
                    className='text-text-blog  text-lg w-11/12 opacity-0 translate-y-4 '>
                    Faites la connaissance de
                    <span className="font-bold">
                        Yacine
                    </span>
                    et
                    <span className="font-bold">
                        Camil
                    </span>, deux ingénieurs passionnés par la création de sites web professionnels et sécurisés.
                    <span className="font-bold">
                        Yacine
                    </span>
                    est un expert en développement web tandis que
                    <span className="font-bold">
                        Camil
                    </span>
                    est un ingénieur en cybersécurité. Ensemble, ils ont fondé une agence web qui allie leur expertise technique à une forte orientation client.
                </p>
                <p ref={text2}
                    className='text-text-blog  text-lg w-11/12 opacity-0 translate-y-4  '>
                    Chez notre agence web, nous croyons que chaque entreprise, organisation ou particulier mérite un site web qui reflète leur identité unique et répond à leurs besoins spécifiques. Nous sommes déterminés à offrir des services exceptionnels à chaque client, en portant une attention particulière à la sécurité en ligne.
                </p>

                <div ref={icon_1} className="flex gap-6 opacity-0 translate-y-16 items-center w-10/12 flex-row  mt-6">
                    <div className="shadow-offset-xl w-20 h-20  shadow-inner-xl flex justify-center items-center bg-white rounded-md ">
                        <Image  src={andriod} alt='' width={40} height={40}  />
                    </div>
                    <div className="shadow-offset-xl w-20  h-20 shadow-inner-xl flex justify-center items-center bg-white rounded-md ">
                        <Image  src={apple} alt=''  width={40} height={40} />
                    </div>
                    <div className="shadow-offset-xl w-20  h-20 shadow-inner-xl flex justify-center items-center bg-white rounded-md ">
                        <Image  src={windows} alt=''  width={40} height={40} />
                    </div>
                    
                </div>

            </div>
            </div> 
        </div>
    )
}

export default AboutProject;
