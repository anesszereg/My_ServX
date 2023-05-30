import { useState  } from "react";
import Image from "next/image";
import { useEffect } from "react";
import Logo from "public/assets/logo.png";

import Link from "next/link";
import  {Link as ScrollLink} from "react-scroll"
import Sidebar from "./Sidebar";
import Navlinks from "./Navlinks";




function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}








const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [visible, setVisible] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    // giving it a height of h-28 to keep the size fixed
    <header className={`    ${scrollPosition > 0 ? 'bg-white  shadow-md ' : 'bg-transparent'} transition-colors duration-[1s] ease-in-out  top-0  px-8 z-[3] flex w-full fixed   h-20`}>
      <div className="w-full flex max-h-20 h-full md:px-0 px-4 items-start  md:items-center justify-between ">
        {/* object contain scales down the image so its all seen , object center centers it */}
          <div className="flex relative w-40  -left-3  h-full  items-center">
        <ScrollLink className="flex-grow " smooth="true" offset={-80} to={"/home"} >
            <Image fill className="object-contain object-center" alt="myServX Logo" src={Logo} />
        </ScrollLink>
          </div>

        <Navlinks  setActiveNav={setActiveNav} activeNav={activeNav} setVisible={setVisible} visible={visible} />
      </div>
      {/* the phone nav */}
      {/* the form */}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} visible={visible} setVisible={setVisible} />
    </header>
  );
};

export default NavBar;
