import Image from 'next/image'
import React from 'react'
import { Footer,PortfolioSection, NavBar } from '@/components'






function Portfolio() {
  return (
    <section name="/Portfolio" className="overflow-x-hidden flex items-center flex-col">
      <NavBar/>
       
 
    
      <PortfolioSection/>
      <Footer/>
      <div  className="  ball top-0 right-0 bottom-0  z-50 left-0  flex items-center justify-center    absolute  rounded-2xl border border-[#ffbd84] ">
        <div className=" mini_ball w-4 h-4   rounded-2xl bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] "></div>
    
       </div>
    
    </section>

  )
}

export default Portfolio


