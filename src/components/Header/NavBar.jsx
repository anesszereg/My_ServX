import { useState } from "react";
import Image from "next/image";
import Logo from "public/assets/logo.png";

import Link from "next/link";
import Sidebar from "./Sidebar";
import Navlinks from "./Navlinks";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    // giving it a height of h-28 to keep the size fixed
    <nav className={`bg-white bg-opacity-0 px-8 z-[3] flex w-full fixed   h-20`}>
      <div className="w-full flex max-h-20 h-full md:px-0 px-4 items-start  md:items-center justify-between ">
        {/* object contain scales down the image so its all seen , object center centers it */}
        <Link className="flex-grow " href={"/"} legacyBehavior>
          <div className="flex relative w-40  -left-3  h-full  items-center">
            <Image fill className="object-contain mix-blend-color-burn object-center" alt="myServX Logo" src={Logo} />
          </div>
        </Link>

        <Navlinks setActiveNav={setActiveNav} activeNav={activeNav} setVisible={setVisible} visible={visible} />
      </div>
      {/* the phone nav */}
      {/* the form */}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} visible={visible} setVisible={setVisible} />
    </nav>
  );
};

export default NavBar;
