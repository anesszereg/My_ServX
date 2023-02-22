import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import {BsFillTelephoneFill} from "react-icons/bs"
const Navlinks = ({visible,setVisible,setActiveNav,activeNav}) => {
  const links = [
    { title: "about", slug: "/about" },
    { title: "contact", slug: "/contact" },
    { title: "work", slug: "/work" },
    { title: "stuff", slug: "/stuff" },
  ];
  // now u made the links u can replicate them
  return (
    <div className="w-full max-w-3xl flex  h-full">
      <nav className="w-full flex items-center pr-4 h-full">
        <ul className="w-full intersect gap-x-8 lg:gap-x-16 h-full hidden md:flex items-center">
          {links.map((item, index) => (
            // 4px is a custom value h-[custom value]
            // now for the cool stuff you can add a group class to the parent
            // then use it to select children and animate them
            <li key={index} className="h-full  uppercase group font-medium tracking-wider grid place-items-center  text-gray-800 w-20 relative">
              {/* left and translate to center the bottom gradient */}
              <div className="absolute opacity-0 group-hover:opacity-100 left-[50%] -translate-x-[50%] transition-all ease-in-out duration-500 group-hover:w-full w-0 h-[4px] bottom-0  bg-gradient-to-r from-sky-400 to-indigo-400"></div>
              <Link className="h-full w-full grid place-items-center" href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end w-full md:w-fit gap-x-8 md:gap-x-0">
          
          <button onClick={()=>{setActiveNav(!activeNav); setVisible(false)}} type="button" className="block md:hidden">
            <BiMenuAltRight className="text-4xl   text-slate-800" />
          </button>
          <button onClick={()=>setVisible(!visible)} type="button" className="md:grid hidden place-items-center md:w-40 w-12 h-12 rounded-full relative overflow-hidden transition-all group font-bold text-sm duration-500 ease-in-out   text-white uppercase bg-gradient-to-r from-purple-400  to-sky-400">
            <div className="w-12 h-12 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200 md:bg-purple-600 md:bg-opacity-20 bg-opacity-20 absolute -right-6 -top-6 "></div>
            <span className="hidden md:block">contact</span>
            <BsFillTelephoneFill className="md:hidden text-xl text-white" />
          </button>
          
        </div>
      </nav>
    </div>
  );
};

export default Navlinks;
