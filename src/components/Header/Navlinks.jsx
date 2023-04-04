import { BiMenuAltRight } from "react-icons/bi";
import {BsFillTelephoneFill} from "react-icons/bs"
import  {Link as ScrollLink} from "react-scroll"
import Link from "next/link";
const Navlinks = ({visible,setVisible,setActiveNav,activeNav}) => {
  const links = [
    
    { title: "services", slug: "/services" },
    { title: "work", slug: "/work" },
    { title: "blog", slug: "/blog" },
    
  ];
  // now u made the links u can replicate them
  return (
    <div className="w-full max-w-3xl flex  h-full   lg:pr-6">
      <nav className="w-full flex items-center lg:pr-4 h-full">
        <ul className="w-full intersect gap-x-8 lg:mr-10   lg:gap-x-16 h-full hidden md:flex items-center">
        <li className="h-full  w-full uppercase group font-medium tracking-wider grid place-items-center  text-gray-800 w-20 relative">
              {/* left and translate to center the bottom gradient */}
              <div className="absolute  group-hover:left-0 right-0   transition-all ease-in-out duration-500 group-hover:w-full w-0 h-[4px] bottom-0  bg-gradient-to-r from-sky-400 to-indigo-400"></div>
              <Link className="h-full cursor-pointer w-full grid place-items-center" smooth={true} offset={-80} href='/'>Home</Link>
            </li>
          {links.map((item, index) => (
            // 4px is a custom value h-[custom value]
            // now for the cool stuff you can add a group class to the parent 
            // then use it to select children and animate them
            <li key={index} className="h-full  uppercase group font-medium tracking-wider grid place-items-center  text-gray-800 w-full relative">
              {/* left and translate to center the bottom gradient */}
              <div className="absolute  group-hover:left-0 right-0   transition-all ease-in-out duration-500 group-hover:w-full w-0 h-[4px] bottom-0  bg-gradient-to-r from-sky-400 to-indigo-400"></div>
              <ScrollLink className="h-full cursor-pointer w-full grid place-items-center" smooth offset={-80} to={item.slug}>{item.title}</ScrollLink>
            </li>
          ))}
          
          <li className="h-full  uppercase group font-medium tracking-wider grid place-items-center  text-gray-800 w-full relative">
              {/* left and translate to center the bottom gradient */}
              <div className="absolute  group-hover:left-0 right-0   transition-all ease-in-out duration-500 group-hover:w-full w-0 h-[4px] bottom-0  bg-gradient-to-r from-sky-400 to-indigo-400"></div>
              <Link className="h-full cursor-pointer w-24 flex  items-center" smooth offset={-100} href='/AgencyPage'>About Us</Link>
            </li>

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
