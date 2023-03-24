import Image from 'next/image'
import React from 'react'


function WorkCategory() {


    const work = [
        {
            title:'Social Networking',
            url:'/assets/Work-categoy/icon-1.png'
        },
        {
            title:'Digital Marketing',
            url:"/assets/Work-categoy/icon-2.png"
        }   , 
        {
            title:'Ecommerce Development',
            url:"/assets/Work-categoy/icon-3.png"
        },
        {
            title:'Video Service',
            url:"/assets/Work-categoy/icon-4.png"
        },
        {
            title:'Banking Service',
            url:"/assets/Work-categoy/icon-5.png"
        },
        {
            title:'Enterprise Service',
            url:"/assets/Work-categoy/icon-6.png"
        },
        {
            title:'Education Service',
            url:"/assets/Work-categoy/icon-7.png"
        },
        {
            title:'Tour and Travels',
            url:"/assets/Work-categoy/icon-8.png"
        }   ,     
        {
            title:'Health Service',
            url:"/assets/Work-categoy/icon-9.png"
        },
        {
            title:'Event & Ticket',
            url:"/assets/Work-categoy/icon-10.png"
        }   , 
        {
            title:'Restaurant  Service',
            url:"/assets/Work-categoy/icon-11.png"
        },
        {
            title:'Business Consultant',
            url:"/assets/Work-categoy/icon-12.png"
        }
    
    ]




  return (
    <div className=" bg_image  py-28 w-full h-screen bg-center bg-no-repeat bg-cover ">
        <div className="flex justify-around items-center ">
            <div className=" flex flex-col gap-4 w-80 ">
               <p className="text-work   font-normal text-md " >INDUSTRIES WE WORK FOR</p> 
                <p className=' text-work-card leading-tight font-bold text-5xl  mb-10'>
                Helping Businesses in All Domains
                </p>
                <p className="text-text-blog">
                Successfully delivered digital products Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-4">
                {
                    work.map((item , index)=>(
                        <WorkCard item={item} key={index} />
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default WorkCategory


// creating one card 

const WorkCard = ({item}) => {
    return (
        <div className="flex flex-col justify-center border items-center border-text-blog  gap-3 backdrop-blur-lg rounded-xl  h-40 w-40 rounded-tr-md rounded-bl-md">
                <Image src={item.url} alt="" 
            //    fill
            width={70}
            height={70} />
                <p className=" text-work-card font-normal text-center w-14 ">
                    {item.title}
                </p>
        </div>
    )
}