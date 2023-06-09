import { HowWeWork, Footer,Scroll,CarouselComponent, NavBar, AboutProject } from '@/components'
import React from 'react'


const images =[
  
    '/public/assets/Case/restro-app-1.jpg',
    '/public/assets/Case/restro-app-2.jpg',
  '/public/assets/Case/restro-app-3.jpg',
  '/public/assets/Case/restro-app-4.jpg',
  '/public/assets/Case/restro-app-3.jpg',
    '/public/assets/Case/restro-app-1.jpg',

]


function Project() {
  return (
    <section name="/ourProject" className="overflow-x-hidden flex items-center flex-col">
      <NavBar/>
       <AboutProject/>
       <HowWeWork/>
       <div className="w-[1200px] h-full mx-auto my-20" >

       <CarouselComponent images={images}/>
       </div>
        {/* <Scroll images={images}/> */}
    
      
      <Footer/>
      <div  className="  ball top-0 right-0 bottom-0  z-50 left-0  flex items-center justify-center    absolute  rounded-2xl border border-[#ffbd84] ">
        <div className=" mini_ball w-4 h-4   rounded-2xl bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] "></div>
    
       </div>
    
    </section>
  )
}

export default Project