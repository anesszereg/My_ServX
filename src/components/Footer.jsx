import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="h-[30rem] bg-stone-900 flex flex-col items-center justify-between w-full px-16 py-12">
      <div className="h-full  w-full grid grid-cols-4">
        {/* social */}
        <div className="flex  gap-y-4 flex-col h-full w-full">
          <img className="w-40 relative -left-4 object-contain" src="/assets/logo_transparent.png" alt="" />
          <p className="text-lg text-slate-200 font-medium">
            Vous avez une super idée ou un projet à réaliser ?
            <br /> Nous sommes là pour vous faire décoller !
          </p>
          <div className="gap-x-12 mt-4 flex items-center ">
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="text-xl text-gray-400" />
            </a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
              <BsTwitter className="text-xl text-gray-400" />
            </a>
            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="text-xl text-gray-400" />
            </a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="text-xl text-gray-400" />
            </a>
          </div>
        </div>
        {/* contact */}
        <div className="flex bg-black gap-y-6 flex-col h-full w-full">
            <p className="text-xl text-white font-bold pt-4"> Nous Contactez</p>
            <div className="flex items-center w-full">

            </div>
        </div>
        {/* company */}
        <div></div>
        {/* instagram */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
