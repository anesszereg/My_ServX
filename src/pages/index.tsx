import Head from "next/head";
import { Inter } from "@next/font/google";
import { NavBar,HeroSection,ServicesSection ,AboutUs} from "../components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      <Head>
        <title>MyServX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
    </div>
  );
}
