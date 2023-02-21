import { useState } from "react";
import Image from "next/image";
import Logo from "public/assets/logo.png";

import Link from "next/link";
import Sidebar from "./Sidebar";
import Navlinks from "./Navlinks";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSideBarOpen] = useState(false);

  return (
    // giving it a height of h-28 to keep the size fixed
    <nav className="bg-white w-full fixed h-20">
      <div className="w-full flex h-full md:px-0 px-4  items-center justify-between ">
        {/* object contain scales down the image so its all seen , object center centers it */}
          <Link className="flex-grow" href={"/"}  legacyBehavior>
            <div className="flex relative w-40  h-full  items-center">
            <Image fill className="object-contain object-center" alt="myServX Logo" src={Logo} />

            </div>
          </Link>
        
        <Navlinks  />
      </div>

      {/* <Sidebar visibility={isSidebarOpen == true ? "block" : "hidden"}>
        <div class="relative h-32 w-32 ">
          <div
            onClick={() => {
              isSidebarOpen == true ? setSideBarOpen(false) : setSideBarOpen(true);
            }}
            class="flex left-0 top-0 h-16 w-16 rounded-full bg-green-500"
          >
            01
          </div>
        </div>
      </Sidebar> */}

      {/*
<button className='bg-gradient-to-r from-violet-800 to-sky-500 h-[46px] w-[156px] text-[#fff] rounded-[44px] gap-2 right-0 mt-4 ml-6 hover:shadow-xl hover:bg-gradient-to-r hover:from-violet-900 hover:to-sky-600'>
                                    <span>Request A Quote</span>
                                </button>
                                */}
    </nav>
  );
};

export default NavBar;
