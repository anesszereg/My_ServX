import React from "react";
import { BsFacebook, BsTelephoneFill, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import {MdLocationOn} from "react-icons/md"
const Footer = () => {
  return (
    <footer className="h-[30rem] bg-stone-900 flex flex-col items-center justify-between w-full px-16 py-12">
      <div className="h-full max-w-7xl gap-4  w-full grid grid-cols-12">
        {/* social */}
        <div className="flex col-span-4  gap-y-4 flex-col h-full w-full">
          <img className="w-40 relative -left-4 object-contain" src="/assets/logo_transparent.png" alt="" />
          <p className="text-lg text-slate-200 font-medium">
            Vous avez une super idée ou un projet à réaliser ?
            <br /> Nous sommes là pour vous faire décoller!
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
        <div className="flex col-span-4  gap-y-6 flex-col pt-4 h-full w-full">
          <p className="text-xl text-white font-bold "> Nous Contactez</p>
          <div className="flex items-start gap-x-4 w-full">
            <IoMdMail className="text-3xl relative top-1 text-gray-400" />
            <div className="h-full flex flex-col gap-y-1">
              <p className="text-lg text-gray-300 font-bold "> Email</p>
              <a className="text-gray-400 font-medium" href="mailto:contact@myservx.fr">
                contact@myservx.fr
              </a>
            </div>
          </div>
          <div className="flex items-start gap-x-4 w-full">
            <BsTelephoneFill className="text-3xl relative top-1 text-gray-400" />
            <div className="h-full flex flex-col gap-y-1">
              <p className="text-lg text-gray-300 font-bold "> Email</p>
              <a className="text-gray-400 font-medium" href="tel:+33 613 940 182">
                +33 613 940 182
              </a>
            </div>
          </div>
          <div className="flex items-start gap-x-4 w-full">
            <MdLocationOn className="text-3xl relative top-1 text-gray-400" />
            <div className="h-full flex flex-col gap-y-1">
              <p className="text-lg text-gray-300 font-bold "> Email</p>
              <p className="text-gray-400 font-medium">19 Quai de Rive Neuve, 13007 Marseille</p>
            </div>
          </div>
        </div>
        {/* company */}
        <div className="col-span-2 flex flex-col pt-4">
          <p className="text-xl text-white font-bold "> Company</p>

        </div>
        {/* instagram */}
        <div className="col-span-2 gap-y-6  pt-4 flex flex-col">
          <p className="text-xl text-white font-bold "> Instagram</p>
        <div className="h-full gap-4 grid-rows-3 w-full grid grid-cols-2">
            <div className="bg-emerald-400">
            </div>
            <div className="bg-emerald-400">

            </div>
            <div className="bg-emerald-400">

            </div>
            <div className="bg-emerald-400">

            </div>
            <div className="bg-emerald-400">

            </div>
            <div className="bg-emerald-400">

            </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
