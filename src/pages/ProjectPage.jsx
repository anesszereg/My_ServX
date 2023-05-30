import { HowWeWork, Footer,Scroll,CarouselComponent, NavBar, AboutProject } from '@/components'
import React from 'react'


const images =[
  
    'assets/Case/restro-app-1.jpg',
  'assets/Case/restro-app-2.jpg',
  'assets/Case/restro-app-3.jpg',
  'assets/Case/restro-app-4.jpg',
  // 'assets/Case/restro-app-3.jpg',

]


function Project() {
  return (
    <section name="/aboutUs" className="overflow-x-hidden flex items-center flex-col">
      <NavBar/>
       <AboutProject/>
       <HowWeWork/>
       {/* <CarouselComponent/> */}
       <Scroll images={images}/>
      <div className="w-full gap-8 max-w-8xl mt-20 mb-5 px-4 md:flex-row flex-col flex items-center justify-center ">
        <h3 className="text-4xl text-center font-bold text-slate-700">Votre Idée, Une réalité</h3>
        <button  type="button" className="grid  place-items-center w-72 h-14 rounded-full relative overflow-hidden transition-all group font-medium duration-500 ease-in-out   text-white capitalize bg-gradient-to-r from-button1  via-button2 to-button3">
            <div className="w-20 h-20 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200 md:bg-opacity-20 bg-opacity-20 absolute -right-6 -bottom-6 "></div>
            <span className="">Confiez-nous Votre Project</span>
          </button>
      </div>
      
      <Footer/>
      <div  className="  ball top-0 right-0 bottom-0  z-50 left-0  flex items-center justify-center    absolute  rounded-2xl border border-[#ffbd84] ">
        <div className=" mini_ball w-4 h-4   rounded-2xl bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] "></div>
    
       </div>
    
    </section>
  )
}

export default Project