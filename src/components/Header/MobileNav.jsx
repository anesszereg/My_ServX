import React from "react";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const MobileNav = ({ handleClick, activeNav, visible }) => {
  const links = [
    { title: "about", slug: "/about", icon: <AiOutlineHome className="text-2xl" /> },
    { title: "contact", slug: "/contact", icon: <AiOutlineHome className="text-2xl" /> },
    { title: "work", slug: "/work", icon: <AiOutlineHome className="text-2xl" /> },
    { title: "stuff", slug: "/stuff", icon: <AiOutlineHome className="text-2xl" /> },
  ];

  return (
    <nav className={`w-full ${activeNav  ? "flex" : " hidden"} relative py-8  flex-col  h-full`}>
      <ul className=" pt-20  flex flex-col gap-y-8">
        {links.map((item, index) => (
          // 4px is a custom value h-[custom value]
          // now for the cool stuff you can add a group class to the parent
          // then use it to select children and animate them
          <li
            key={index}
            className="h-12 uppercase group font-medium tracking-wider grid dark:text-white text-gray-800 w-full relative"
          >
            {/* left and translate to center the bottom gradient */}
            <div className="absolute  opacity-100  transition-all ease-in-out duration-500 w-full h-[2px] bottom-0  bg-gradient-to-r from-sky-400 to-indigo-400"></div>
            <Link className="h-full w-full flex items-center justify-between" href={item.slug}>
              {item.title}
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 bottom-8 absolute w-full flex items-center justify-center">
        <button
          onClick={() => handleClick()}
          type="button"
          className=" justify-between items-center  px-16   w-60 flex h-12 rounded-full relative overflow-hidden transition-all group font-bold text-sm duration-500 ease-in-out   text-white uppercase bg-gradient-to-r from-purple-400  to-sky-400"
        >
          <div className="w-12 h-12 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200 md:bg-purple-600 md:bg-opacity-20 bg-opacity-20 absolute -right-6 -top-6 "></div>
          <BsFillTelephoneFill className=" text-xl text-white" />

          <span className="block">contact</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
