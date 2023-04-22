import Head from "next/head";
import { Inter } from "@next/font/google";
import { NavBar,Footer,HeroSection,Work,ServicesSection ,AboutUs, StaticSection ,Technologies, WorkCategory, MissionVission, Philosophy, AboutCompany, DescribSection, } from "../components";
import { useRouter } from "next/router";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <section  className="  overflow-x-hidden flex items-center flex-col ">
      <Head>
        <title>MyServX</title>
  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="description" content="MyServX, Une créativité sans limite, une sécurité sans faille pour votre site web" />
        <meta name="keywords" content="MyServX, myservx, site web, e-commerce, security, securité, developpement, sans faille, service, servix" />
        <meta property="og:title" content="myservx" />
        <meta property="og:description" content="MyServX, Une créativité sans limite, une sécurité sans faille pour votre site web" />
        <meta property="og:url" content="https://myservx.netlify.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <NavBar />
      {/* <Cursor/> */}
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <StaticSection/>
      <WorkCategory/>
      <Work />
      <MissionVission/>
     
    
      <Technologies />
      <div className="w-full gap-8 max-w-7xl mt-20 mb-5 px-4 md:flex-row flex-col flex items-center justify-center ">
        <h3 className="text-4xl text-center font-bold text-slate-700">Votre Idée, Une réalité</h3>
        <button  type="button" className="grid intersect  place-items-center w-72 h-14 rounded-full relative overflow-hidden transition-all group font-medium duration-500 ease-in-out   text-white capitalize bg-gradient-to-r from-button1  via-button2 to-button3">
            <div className="w-20 h-20 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200 md:bg-opacity-20 bg-opacity-20 absolute -right-6 -bottom-6 "></div>
            <span className="">Confinez Nous Votre Project</span>
          </button>
      </div>
      
      <Footer />
      <div   className="  ball top-0 right-0 bottom-0  z-50 left-0  flex items-center justify-center    absolute  rounded-2xl border border-[#ffbd84] ">
        <div className=" mini_ball w-4 h-4   rounded-2xl bg-gradient-to-r from-[#ffbd84] to-[#ff1f8e] "></div>
    
       </div>
      
    

    </section>
  );
}
