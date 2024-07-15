import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap,Power3 } from "gsap";
import CountUp from 'react-countup';


function AboutCompany() {


    gsap.registerPlugin(ScrollTrigger);
  const subtitle = useRef();
  const title = useRef();
  const text = useRef();
  const text2 = useRef();
  const text3 = useRef();
  const text4 = useRef();
  const text5 = useRef();
  const cardContainer = useRef();
  useEffect(() => {
    gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle.current})
    gsap.to(text.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text.current})
    gsap.to(text2.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text2.current})
    gsap.to(text3.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text3.current})
    gsap.to(text4.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text4.current})
    gsap.to(text5.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:text5.current})
    gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:title.current})
    gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
  }, [])



    return (
        <div className="bg_about_company flex lg:flex-row flex-col justify-center items-center h-full w-full py-28 px-16   mb-10 ">
            <div className="flex  opacity-0 translate-y-4  lg:w-2/6 w-9/12 mb-5 " ref={cardContainer}>
                <Image src='/assets/about/company-about.png'
                    width={450}
                    height={450}
                    className=' flex h-full w-full'
                    />
            </div>
            <div className="flex flex-col lg:items-start items-center gap-4 lg:w-2/6 lg:h-2/6">
                 {<p ref={title} className='text-work  opacity-0 translate-y-4  font-normal text-lg'>
                 &Agrave; PROPOS DE NOUS
                </p> }
                <p ref={subtitle} className='text-work-card leading-tight  font-bold lg:text-5xl text-[28px] mb-3 opacity-0 translate-y-4 '>&Agrave; PROPOS DE L&apos;AGENCE</p>
                <p ref={text} className='text-text-blog  text-lg w-11/12 opacity-0 translate-y-4 '>
                Faites la connaissance de <span className="font-bold"> Yacine </span>  et <span className="font-bold"> Camil </span>, deux ingénieurs passionnés par la création de sites web professionnels et sécurisés. <span className="font-bold"> Yacine </span> est un expert en développement web tandis que <span className="font-bold"> Camil </span> est un ingénieur en cybersécurité. Ensemble, ils ont fondé une agence web qui allie leur expertise technique à une forte orientation client.                </p>
                <p ref={text2} className='text-text-blog  text-lg w-11/12 opacity-0 translate-y-4  '>
                Chez notre agence web, nous croyons que chaque entreprise, organisation ou particulier mérite un site web qui reflète leur identité unique et répond à leurs besoins spécifiques. Nous sommes déterminés à offrir des services exceptionnels à chaque client, en portant une attention particulière à la sécurité en ligne.                </p>

                <div className="flex justify-between items-center w-10/12 flex-col md:flex-row lg:flex-row mt-6">
                        <div className="flex flex-col">
                            <p className='font-bold text-blog1 text-4xl '><CountUp end={5} duration={1} /> </p>
                            <p ref={text3} className='text-text-blog opacity-0 translate-y-4   text-lg'>Clients Satisfaits</p>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-bold text-blog1 text-4xl '><CountUp end={525} duration={4} />{ /*k*/}</p>
                            <p ref={text4} className='text-text-blog opacity-0 translate-y-4   text-lg'>Heures Travaill&eacute;es </p>
                        </div>
                        <div className="flex flex-col">
                            <p className='font-bold text-blog1 text-4xl '><CountUp end={6} duration={1} /> </p>
                            <p ref={text5} className='text-text-blog opacity-0 translate-y-4   text-lg'>Projets R&eacute;alis&eacute;s</p>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default AboutCompany



