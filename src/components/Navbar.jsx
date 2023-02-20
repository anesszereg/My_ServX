import { useState } from "react";
import ButtonBurger from "./ButtonBurger"
import Image from "next/image";
import Logo from "public/assets/logo.png"

import Link from "next/link";
import Sidebar from "./Sidebar"
import Navlinks from "./Navlinks"

const Navbar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false); 
    const [isSidebarOpen , setSideBarOpen] = useState(false);
   
    return (
                
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
            
            <Link href={'/'}  className="flex items-center" legacyBehavior>
                <Image  className="h-25 w-1/4 xl:h-40 xl:w-1/4" alt="myServX Logo" src={Logo} />
            </Link>
            <div className="flex md:order-2">
                <button  type="button" 
                onClick={() => {isSidebarOpen == true ? setSideBarOpen(false) : setSideBarOpen(true)}}
                className="text-white text-xs sm:text-lg xl:text-lg bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full  px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">demander un devis</button>
            
            <ButtonBurger data={isDropdownOpen} toggleItem={setDropdownOpen} />
            
            </div>
               
                <Navlinks visibility={isDropdownOpen == true ? "block" : "hidden"} />

            </div>
                    
            <Sidebar visibility={isSidebarOpen == true ? "block" : "hidden"} >
                 {/*<!-- Pin to top left corner -->*/}
                    <div class="relative h-32 w-32 ">
                    <div onClick={()=>{isSidebarOpen == true ? setSideBarOpen(false) : setSideBarOpen(true)}} class="flex left-0 top-0 h-16 w-16 rounded-full bg-green-500">01</div>
                    </div>
                </Sidebar>
                       
{/*
<button className='bg-gradient-to-r from-violet-800 to-sky-500 h-[46px] w-[156px] text-[#fff] rounded-[44px] gap-2 right-0 mt-4 ml-6 hover:shadow-xl hover:bg-gradient-to-r hover:from-violet-900 hover:to-sky-600'>
                                    <span>Request A Quote</span>
                                </button>
                                */
}
    
        </nav>
                    

    );
}

export default Navbar;