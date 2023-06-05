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
        link: image1,
        type: 'Mobile app'

    },

    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image2,
        type: 'creative'

    },


    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image3,
        type: 'mobile app'

    },
    {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image4,
        type: 'branding'

    }, {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image5,
        type: 'branding'

    }, {
        title: "creativity Demand",
        sub_title: "DESIGN , WORDPRESS",
        link: image6,
        type: 'creative'

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
                height: window.innerWidth <= 600 ? 610 : 510,
                delay: index,
                opacity: 1,
                duration: 1,
                ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: elementsRef.current,
                    start: "top bottom-=100",
                    end: "bottom center",
                    toggleActions: "play none none reset"
                }
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
    const [selectedType, setSelectedType] = useState('All');
    const filteredCards = selectedType === 'All' ? CARDS : CARDS.filter(card => card.type.toLowerCase() === selectedType.toLowerCase());


    return (
        <section id="Portfolio" className=" relative mt-20 h-full w-full px-8 py-16 text-slate-900  bg-cover bg-center bg-no-repeat bg-[#111215] ">

            <div className=" fixed left-[-250px] top-[250px]   w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500 to-blue-300 opacity-25 blur-[100px]"></div>
            <div className=" fixed right-[-250px] top-0   w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#fb5343] to-[#6549d5] opacity-25 blur-[100px]"></div>
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

                <div className=" flex tracking-[1px] font-medium justify-center items-center p-4 bg-[hsla(0,0%,100%,.02)] rounded-[5px] gap-2 ">
                    <p className={
                            selectedType === 'All' ? 'text-[12px] font-sans text-[#12c2e9] font-bold mx-5' : ' mx-5 text-white text-[12px] font-sans'
                        }
                        onClick={
                            () => setSelectedType('All')
                    }>All</p>
                       <div className="flex justify-center items-center h-2 w-2 bg-[#12c2e9] rounded-full"></div>
                    <p className={
                            selectedType === 'Branding' ? 'text-[12px] font-sans text-[#12c2e9] font-bold mx-5' : ' mx-5 text-white text-[12px] font-sans'
                        }
                        onClick={
                            () => setSelectedType('Branding')
                    }>Branding</p>
                       <div className="flex justify-center items-center h-2 w-2 bg-[#12c2e9] rounded-full"></div>
                    <p className={
                            selectedType === 'Mobile app' ? 'text-[12px] font-sans text-[#12c2e9] font-bold mx-5' : ' mx-5 text-white text-[12px] font-sans'
                        }
                        onClick={
                            () => setSelectedType('Mobile app')
                    }>Mobile App</p>
                    <div className="flex justify-center items-center h-2 w-2 bg-[#12c2e9] rounded-full"></div>
                    <p className={
                            selectedType === 'Creative' ? 'text-[12px] font-sans text-[#12c2e9] font-bold mx-5' : ' mx-5 text-white text-[12px] font-sans'
                        }
                        onClick={
                            () => setSelectedType('Creative')
                    }>Creative</p>

                </div>
                {/* cards container */}
                <div className=" p-4 mt-4 max-w-[1220px] w-full grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 grid-rows-2  gap-3  ">


                    {
                    filteredCards.map((item, index) => (
                        <div className='opacity-0 h-0'
                            key={index}
                            ref={
                                el => elementsRef.current[index] = el
                        }>
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
                toggleActions: "play none none reset"
            }
        });
    }, []);


    return (

        <div className="h-full w-full   flex flex-col gap-2    transition-all duration-500 ease-in-out  ">
            <div className=" md:w-[370px] sm:w-[510px] md:h-[463px] sm:h-full overflow-hidden ">
                <Image src={
                        item.link
                    }
                    alt='image'

                    className='md:w-[370px] md:h-[463px]  object-contain sm:w-full sm:h-[637px] hover:scale-110 hover:transition-transform hover:duration-300'/>
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
