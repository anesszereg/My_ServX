import Head from "next/head";
import { Inter } from "@next/font/google";
import { NavBar,Footer,HeroSection,Work,ServicesSection ,AboutUs, StaticSection ,Technologies, WorkCategory, MissionVission, Philosophy, AboutCompany, DescribSection} from "../components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden flex items-center flex-col ">
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
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <StaticSection/>
      <WorkCategory/>
      <Work />
      {/* <AboutCompany/> */}
      <MissionVission/>
      {/* <Philosophy/> */}
      {/* <DescribSection/> */}
      
      <Technologies />
      <div className="w-full gap-8 max-w-7xl mt-20 mb-5 px-4 md:flex-row flex-col flex items-center justify-center ">
        <h3 className="text-4xl text-center font-bold text-slate-700">Votre Idée, Une réalité</h3>
        <button  type="button" className="grid  place-items-center w-72 h-14 rounded-full relative overflow-hidden transition-all group font-medium duration-500 ease-in-out   text-white capitalize bg-gradient-to-r from-button1  via-button2 to-button3">
            <div className="w-20 h-20 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200 md:bg-opacity-20 bg-opacity-20 absolute -right-6 -bottom-6 "></div>
            <span className="">Confinez Nous Votre Project</span>
          </button>
      </div>
      
      <Footer />
    </div>
  );
}
