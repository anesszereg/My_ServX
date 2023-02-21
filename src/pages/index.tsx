import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NavBar,HeroSection } from "../components";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>MyServX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroSection />
    </div>
  );
}
