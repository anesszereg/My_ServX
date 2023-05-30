import Image from 'next/image';
import React from 'react'
import back_end from 'public/assets/Case/back.svg'
import front_end from 'public/assets/Case/branding.svg'
import UX_UI from 'public/assets/Case/logo-and-branding.svg'
import SEO from 'public/assets/Case/seo.svg'




const Cards = [
    {
        title:'UI/UX Design ',
        icon:UX_UI
    },
    
    {
        title:'Front-end Dev ',
        icon:front_end
    },
    
    {
        title:'Back-end Dev ',
        icon:back_end
    },
    
    {
        title:'SEO Optimization',
        icon:SEO
    },
    
]


function HowWeWork() {
    return (
        <div className='flex align-center justify-center bg-gradient-to-b from-rose-100 to-rose-50  h-full w-full py-28 px-20  mb-10'>
            <div className="flex flex-col gap-3 w-10/12 ">
                <p className='text-work  opacity-1 translate-y-1  font-normal text-xl'>
                    SOLUTION</p>
                <p className='text-work-card leading-tight  font-bold  text-[44px] mb-8 opacity-1 translate-y-4 '>How We WorK</p>
                <p className='text-work-card leading-tight  font-bold lg:text-4xl text-[22px] mb-3 opacity-1 translate-y-4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p className='text-text-blog  text-xl w-11/12 opacity-1 translate-y-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui aperiam rerum. Illum distinctio iusto commodi incidunt recusandae illo rem labore ea, nihil ipsa ab et numquam, laboriosam enim inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque provident at quis est impedit, autem error cumque temporibus ab corrupti recusandae possimus ullam optio aspernatur illum similique animi quia.</p>

                <div className="flex gap-6 items-center w-10/12 flex-col md:flex-row lg:flex-row mt-16">
                    {

                        Cards.map((item , index)=>(
                            <CardWork key={index} item={item}/>
                        ))
                    }
                    </div>
            </div>

        </div>
    )
}

export default HowWeWork



const CardWork = ({item}) => {
    return (
        <div className=" h-[160px] w-[270px] relative    group transition-all duration-500 ease-in-out  py-4 outline outline-2 outline-sky-100 rounded-xl bg-white  w-full px-2  sm:px-4 shadow-lg border border-solid border-gray-300">
           
            <div className="gap-y-4 relative z-[1] flex flex-col h-full items-center">
                <Image src={
                        item.icon
                    }
                    alt='icon'
                    width={80}
                    height={80}/>

                <p className="sm:text-xl text-4xl  transition-colors ease-in-out duration-75  text-work-card sm:w-72 text-center font-bold capitalize">
                    {
                    item.title
                }</p>
                
           
            </div>
        </div>
    );
};
