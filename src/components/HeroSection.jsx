import React from 'react'

const HeroSection = () => {
  return (
    <section className='h-screen w-full px-8 pt-40'>
          <div className="flex items-center lg:items-start gap-y-16 leading-loose font-bold flex-col">
              <h1 className="md:text-7xl text-4xl sm:text-6xl lg:text-left sm:text-center">Une <span className="text-blue-600">créativité</span> sans <div className="md:block hidden"></div> limite, une <span className="text-blue-600">sécurité</span> <div className="md:block hidden"></div> sans faille pour vote <div className="md:block hidden"></div> site web</h1>
              <div className="flex sm:flex-row justify-center lg:justify-start flex-col w-full items-center gap-y-4 sm:gap-x-12">
              <button className='sm:w-72 max-w-xs w-full uppercase transition-all ease-in-out duration-300 hover:bg-opacity-80 text-white font-medium h-14 sm:h-16 bg-blue-600 rounded-lg'>
                  notre travaile
              </button>
              <button className='sm:w-60 max-w-xs w-full uppercase transition-all ease-in-out duration-300 hover:border-blue-400 text-slate-900 font-medium h-14 sm:h-16  border-4 border-blue-600 rounded-lg'>
                  explorer
              </button>
              </div>
          </div>

    </section>
  )
}

export default HeroSection