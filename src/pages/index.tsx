import Head from "next/head";
import { Inter } from "@next/font/google";
import { NavBar,Footer,HeroSection,Work,ServicesSection ,AboutUs, StaticSection ,Technologies} from "../components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden flex items-center flex-col ">
      <Head>
        <title>MyServX</title>
  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="description" content="MyServX, Une créativité sans limite, une sécurité sans faille pour votre site web" />
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
      <Work />
      <Technologies />
      <div className="w-full gap-8 max-w-7xl px-4 md:flex-row flex-col flex items-center justify-evenly">
        <h3 className="text-4xl text-center font-bold text-slate-700">Votre Idée. Sera Réalisée</h3>
        <button  type="button" className="grid  place-items-center w-72 h-16 rounded-full relative overflow-hidden transition-all group font-medium duration-500 ease-in-out   text-white capitalize bg-gradient-to-r from-amber-400  to-orange-400">
            <div className="w-20 h-20 group-hover:scale-[1.75] transition-all duration-500 ease-in-out rounded-full bg-purple-200 md:bg-opacity-20 bg-opacity-20 absolute -right-6 -bottom-6 "></div>
            <span className="">Confinez Nous Votre Project</span>
          </button>
      </div>
      <div className="h-40">
      </div>
      <Footer />
    </div>
  );
}
