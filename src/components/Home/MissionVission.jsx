import Image from 'next/image'
import React from 'react'





function MissionVission() {
  return (
    <div className="py-28 px-20 flex flex-col justify-center gap-10  h-full w-full bg-gradient-to-b  from-mission to-vision ">
        <div className="  flex gap-8  w-full   ">

            <p className='text-work-card leading-tight font-bold text-4xl w-10/12  mb-10'> A group of creative minds dedicated to creating the best apps and websites in the world. </p>
            <div className="flex flex-col w-11/12 gap-3 ml-16 ">
                <p className='text-text-blog  text-lg w-full ' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolorem commodi incidunt accusantium obcaecati quas adipisci? Ut, repudiandae nihil deleniti maiores delectus aliquam magnam? Odio voluptate quidem aperiam quod nesciunt.</p>
                <p className='text-text-blog text-lg w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolorem commodi incidunt accusantium obcaecati quas adipisci? Ut, repudiandae nihil deleniti maiores delectus aliquam magnam? Odio voluptate quidem aperiam quod nesciunt.</p>
            </div>

        </div>
        <div className="  flex gap-8 justify-center items-center w-full   ">
            <div className="flex flex-col gap-5 w-3/6">
                <Image
                src='/assets/missionVision/vision.png'
                width={75}
                height={75}
                />

                <p className='text-work-card leading-tight font-bold text-4xl w-5/12   mb-10'>Our Vision</p>
                <p className='text-text-blog text-lg w-11/12 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eius quisquam incidunt rerum reiciendis, cum sint architecto, quae a tenetur dicta neque placeat eveniet expedita temporibus libero. Harum, maxime doloribus!</p>
            </div>
            <div className="flex flex-col  gap-5  w-3/6 ">
                <Image
                src='/assets/missionVision/mountain.png'
                width={75}
                height={75}
                />

                <p className='text-work-card leading-tight font-bold text-4xl w-5/12  mb-10'>Our Mission</p>
                <p className='text-text-blog text-lg w-11/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eius quisquam incidunt rerum reiciendis, cum sint architecto, quae a tenetur dicta neque placeat eveniet expedita temporibus libero. Harum, maxime doloribus!</p>
            </div>
           

        </div>
    </div>
  )
}

export default MissionVission