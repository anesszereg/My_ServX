import { gsap,Power3 } from "gsap";
import { useEffect,useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
const Work = () => {
    gsap.registerPlugin(ScrollTrigger);
    const subtitle = useRef();
    const title = useRef();
    const cardContainer = useRef();
    useEffect(() => {
      gsap.to(subtitle.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:subtitle.current})
      gsap.to(title.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:title.current})
      gsap.to(cardContainer.current,{y:0,delay:0.2,opacity:1,duration:1,ease:Power3.easeOut,scrollTrigger:cardContainer.current})
    }, [])
    const cards = [
      {
        title: "Application Ios",
        sub: "ios, design, Responsive",
        link: "https://flyfra.vercel.app/",
        bg:"bg-gradient-to-br from-red-400 to-orange-500",
        image:"/assets/work/phonePng.png"
      },
      {
        title: "Application Ios",
        sub: "ios, design, Responsive",
        link: "https://flyfra.vercel.app/",
        bg:"bg-gradient-to-br from-amber-400 to-orange-500",
        image:"/assets/work/phonePng.png"
      },
      {
        title: "Application Ios",
        sub: "ios, design, Responsive",
        link: "https://flyfra.vercel.app/",
        bg:"bg-gradient-to-br from-blue-400 to-orange-500",
        image:"/assets/work/phonePng.png"
      },
      {
        title: "Application Ios",
        sub: "ios, design, Responsive",
        link: "https://flyfra.vercel.app/",
        bg:"bg-gradient-to-br from-blue-400 to-purple-500",
        image:"/assets/work/phonePng.png"
      },
      {
        title: "Application Ios",
        sub: "ios, design, Responsive",
        link: "https://flyfra.vercel.app/",
        bg:"bg-gradient-to-br from-emerald-200 to-green-500",
        image:"/assets/work/phonePng.png"
      },
      {
        title: "Application Ios",
        sub: "ios, design, Responsive",
        link: "https://flyfra.vercel.app/",
        bg:"bg-gradient-to-br from-slate-900 to-stone-700",
        image:"/assets/work/phonePng.png"
      },

    ];
  return (
    <section id="work" className=" w-full pb-16  sm:px-8 pt-28">
        <div className='h-full w-full flex flex-col items-center'>
        <p ref={subtitle} className="text-xl translate-y-4 opacity-0 bg-gradient-to-r font-medium text-transparent from-purple-600 to-blue-600 bg-clip-text ">
          SERVICES POPULAIRES
        </p>
        <h3 ref={title} className="sm:text-5xl translate-y-16 opacity-0 text-3xl text-center font-extrabold text-slate-900">Nous aidons les marques avec</h3>
        {/* cards container */}
        <div ref={cardContainer} className="h-full p-4 opacity-0 translate-y-52 max-w-7xl w-full grid gap-6 lg:gap-12 [grid-template-columns:_repeat(_auto-fit,_minmax(14rem,_1fr)_);] sm:[grid-template-columns:_repeat(_auto-fit,_minmax(20rem,_1fr)_);] ">
          {cards.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
        </div>
    </section>
  )
}

export default Work

const Card =({item})=>{
    return(
        <div className="w-full px-2 overflow-hidden group justify-end  relative flex flex-col items-start gap-y-4 h-[28rem]">
            <div className="relative w-full h-80">
            <div className={`h-full z-[1] aspect-square transition-all duration-700 ease-out group-hover:scale-95 rounded-xl w-full ${item.bg} absolute top-0`}>
            </div>
            <div className={`h-full z-[2] aspect-square transition-all duration-700 ease-out group-hover:scale-[1.02] grid place-items-center rounded-xl w-full  absolute top-0`}>
                <Image className="object-contain object-center"  fill src={item.image} />
            </div>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-2xl transition-colors hover:text-slate-600 duration-200 font-bold">{item.title}</a>
            <p className="font-medium text-lg">{item.sub}</p>
        </div>
    )
}