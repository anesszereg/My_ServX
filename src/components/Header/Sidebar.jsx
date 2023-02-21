import FormDevis from "./FormDevis";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./MobileNav";
const Sidebar = ({ visible, setVisible, activeNav, setActiveNav }) => {
  const handleClick = (val) => {
    if (val) {
      setVisible(false);
      setActiveNav(false);
    } else {
      setVisible(!visible);
      setActiveNav(!activeNav);
    }
  };
  return (
    <div
      className={` w-full ${
        visible || activeNav ? "visible backdrop-blur-sm" : "invisible"
      } bg-slate-900  bg-opacity-10 h-screen shadow-xl  absolute right-0 top-0`}
    >
      <div onClick={() => handleClick(true)} className="absolute h-full w-full inset-0"></div>
      {/* use template strings to implement varibales in css */}
      <div
        className={`top-0 w-full max-w-xl transition-all ease-in-out duration-500 ${
          visible || activeNav ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } right-0  dark:bg-slate-800  bg-gray-50  p-10 sm:px-20 text-white absolute h-full`}
      >
        <button
          type="button"
          onClick={() => handleClick(true)}
          className="h-12 transition-colors hover:bg-orange-200 duration-300 ease-in-out shadow-lg grid place-items-center w-12 absolute left-4 sm:-left-6 top-2 bg-orange-100 rounded-full"
        >
          <AiOutlineClose className="text-2xl  text-slate-800" />
        </button>
        {/* <FormDevis>{props.children} </FormDevis> */}
        <FormDevis activeNav={activeNav} visible={visible} />
        <MobileNav activeNav={activeNav} visible={visible} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Sidebar;
