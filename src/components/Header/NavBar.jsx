import { useState } from "react";
import Image from "next/image";
import Logo from "public/assets/logo.png";

import Link from "next/link";
import Sidebar from "./Sidebar";
import Navlinks from "./Navlinks";

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
        
        <Navlinks setVisible={setVisible} visible={visible}  />
      </div>
      <Sidebar visible={visible} setVisible={setVisible} />
      
    </nav>
  );
};

export default NavBar;
