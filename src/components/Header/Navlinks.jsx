import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
const Navlinks = (props) => {
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
        <ul className="w-full gap-x-16 h-full hidden md:flex items-center">
          {links.map((item, index) => (
            // 4px is a custom value h-[custom value]
            // now for the cool stuff you can add a group class to the parent
            // then use it to select children and animate them
            <li className="h-full uppercase group font-medium tracking-wider grid place-items-center text-gray-800 w-20 relative">
              <div className="absolute transition-all ease-in-out duration-500 group-hover:w-full w-0 h-[4px] bottom-0 left-0 bg-gradient-to-r from-sky-400 to-indigo-400"></div>
              <Link href={item.slug}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-end w-full md:w-fit gap-x-8 md:gap-x-0">
          <button type="button" className="w-52 h-12 rounded-full relative overflow-hidden transition-all group font-bold text-sm duration-500 ease-in-out   text-white uppercase bg-gradient-to-r from-purple-400  to-sky-400">
            <div className="w-12 h-12 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-600 bg-opacity-20 absolute -right-6 -top-6 "></div>
            contact
          </button>
          <button type="button" className="block md:hidden">
            <BiMenuAltRight className="text-4xl  text-slate-800" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navlinks;
