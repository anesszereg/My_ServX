import Image from 'next/image'
import React from 'react'
import E_comerce from 'public/assets/services/online-shop.png'
import Service from 'public/assets/services/worldwide-security.png'
import Vitrines from 'public/assets/services/web-design.png'
import Mobile from 'public/assets/services/chat.png'
import Web from 'public/assets/services/layers.png'
import Marketing from 'public/assets/services/marketing-mix.png'

function ScrollSection() {
  return (
    <div className='bgImage h-screen bg-cover bg-center w-full flex justify-center items-center flex-col px-20 py-20'>
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-full h-full gap-3 ">
            <div className="box w-3/12 h-3/12 flex-col gap-3 p-5">
                <Image src={Vitrines} alt='' width={50} height={50}/>
                
                <p className='text-lg'>title</p>
                <p className='text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorem repellendus iste voluptatem saepe quo labore perferendis, eaque ratione ipsam accusamus qui maxime harum et, velit nemo unde maiores officiis?</p>
            </div>
        </div>
        <div className="flex flex-col w-full h-full gap-3 items-end">
            <div className="box w-3/12 h-3/12 flex-col gap-3">
                <Image src={Marketing} alt='' width={50} height={50}/>
                <p className='text-lg'>title</p>
                <p className='text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorem repellendus iste voluptatem saepe quo labore perferendis, eaque ratione ipsam accusamus qui maxime harum et, velit nemo unde maiores officiis?</p>
            </div>
        </div>
        <div className="flex flex-col w-full h-full gap-3">
            <div className="box w-3/12 h-3/12 flex-col gap-3">
                <Image src={Web} alt='' width={50} height={50}/>
                <p className='text-lg'>title</p>
                <p className='text-md'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. At dolorem repellendus iste voluptatem saepe quo labore perferendis, eaque ratione ipsam accusamus qui maxime harum et, velit nemo unde maiores officiis?</p>
            </div>
        </div>

    </div>
    </div>
  )
}

export default ScrollSection