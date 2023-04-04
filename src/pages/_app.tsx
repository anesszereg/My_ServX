import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { gsap } from "gsap";
import { useEffect } from "react";
  import { Cursor } from "@/components";
export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
    <Cursor/>
      <Component {...pageProps} />
    </>
  );
}
