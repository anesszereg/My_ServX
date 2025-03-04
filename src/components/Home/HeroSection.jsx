import { useEffect, useRef } from "react";
import MovingPhones from "./MovingPhones";
import { gsap, Power3 } from "gsap";
import  {Link as ScrollLink} from "react-scroll"
const HeroSection = () => {
  const tl = gsap.timeline();
  const text = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.from(text.current, { opacity: 0, duration: 1, ease: Power3.easeInOut, yPercent: 5 }).from(
        ".imageContainer",
        { opacity: 0, duration: 2, ease: Power3.easeInOut, yPercent: 10 },
        "-=1"
      );
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.15;
      const images = document.querySelectorAll(".movingImage");
      const fastImages = document.querySelectorAll(".fastImage");
      const xImageSet = gsap.quickSetter(images, "x", "px");
      const xFastImage = gsap.quickSetter(fastImages, "x", "px");
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });
      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        const offset = 10;
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xImageSet(-pos.x / offset);
        xFastImage(-pos.x / (offset / 2));
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section name="/home" className="hero_image h-[70rem] 2xl:h-[50rem] relative overflow-hidden h-screen w-full px-8 pt-28 md:pt-40">
      <div
        ref={text}
        className="flex relative z-[2] items-center lg:items-start gap-y-16 leading-loose font-bold flex-col"
      >
        <h1 className="md:text-7xl text-4xl sm:text-6xl text-slate-700 lg:text-left sm:text-center">
          Une <span className="text-blue-600">créativité</span> sans <div className="md:block hidden"></div> limite, une{" "}
          <span className="text-blue-600">sécurité</span> <div className="md:block hidden"></div> sans faille pour votre{" "}
          <div className="md:block hidden"></div> site web
        </h1>
        <div className="flex sm:flex-row justify-center lg:justify-start flex-col w-full items-center gap-y-4 sm:gap-x-12">
          <ScrollLink smooth offset={-100} to='about'>
          <button className="w-72 max-w-xs uppercase transition-all ease-in-out duration-300 hover:bg-blue-500 text-white font-medium h-14 sm:h-16 bg-blue-600 rounded-lg">
          explorer
          </button>
          </ScrollLink>
          
        </div>
      </div>
      {/* <svg className="h-screen w-full z-[1] opacity-10 absolute top-0 left-0" viewBox="0 0 1366 768">
        <g mask='url("#SvgjsMask1077")' fill="none">
          <path
            d="M0 54.45C9.58 20.16 19.49 9.69 53.65 0C115.49 -17.54 122.82 0 192 0C288 0 288 0 384 0C474.18 0 478.36 -7.82 564.36 0C574.36 0.91 570.18 17.45 576 17.45C581.82 17.45 577.64 0.91 587.64 0C673.64 -7.82 677.82 0 768 0C864 0 864 0 960 0C1056 0 1056 0 1152 0C1248 0 1248 0 1344 0C1413.34 0 1415.91 -10.11 1482.67 0C1511.91 4.43 1528.76 3.02 1536 29.09C1555.42 99.02 1536 110.55 1536 192C1536 288 1536 288 1536 384C1536 480 1536 480 1536 576C1536 605.21 1546.35 607.92 1536 634.43C1508.88 703.92 1515.48 730.15 1461.07 768C1419.48 796.93 1402.53 768 1344 768C1248 768 1248 768 1152 768C1076.82 768 1069.72 784.12 1001.64 768C973.72 761.39 981.63 722.53 960 722.53C936.81 722.53 942.21 760.85 912 768C846.21 783.58 840 768 768 768C672 768 672 768 576 768C485.12 768 477.27 779.45 394.24 768C381.27 766.21 390.69 741.52 384 741.52C376.42 741.52 380.72 765.93 365.71 768C284.72 779.17 278.86 768 192 768C96 768 48 816 0 768C-48 720 0 672 0 576C0 480 0 480 0 384C0 288 0 288 0 192C0 123.23 -17.24 116.16 0 54.45"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M192 149.33C163.79 152.25 148.65 168.14 148.65 192C148.65 223.94 166.01 229.81 192 260.92C246.22 325.81 249.95 323.03 309.07 384C345.95 422.03 353.31 458.93 384 458.93C407.84 458.93 412.84 424.06 418.13 384C430.47 290.59 433.22 280.43 419.27 192C416.16 172.26 404.66 171.54 384 167.66C291.02 150.2 281.46 140.08 192 149.33"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M0 126.09C21.21 126.09 42.46 153.36 71.23 192C138.46 282.31 131.62 288 192 384C192 384 192 384 192 384C288 480 368.02 472.73 384 576C397.73 664.73 327.94 691.49 251.43 768C231.94 787.49 221.72 768 192 768C96 768 48 816 0 768C-48 720 0 672 0 576C0 480 0 480 0 384C0 288 0 288 0 192C0 159.05 -14.41 126.09 0 126.09"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M192 73.14C147.89 56.15 124.24 21.77 124.24 0C124.24 -14.8 158.12 0 192 0C288 0 288 0 384 0C437.82 0 491.64 -21.15 491.64 0C491.64 28.88 448.6 84.29 384 100.06C298.78 120.86 277.77 106.18 192 73.14"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M517.22 192C533.33 152.31 549.77 161.73 576 126.55C621.34 65.73 604.15 37.05 660.36 0C700.15 -26.22 714.18 0 768 0C864 0 864 0 960 0C1000.8 0 1006.65 -16.41 1041.6 0C1102.65 28.65 1088.2 78.55 1152 90.12C1239.4 105.98 1255.07 35.31 1344 54.86C1447.07 77.52 1446.87 110.89 1536 174.55C1542.87 179.46 1536 183.27 1536 192C1536 288 1536 288 1536 384C1536 444 1572.36 473.09 1536 504C1476.36 554.69 1436.87 518.52 1344 547.2C1320.3 554.52 1302.86 553.52 1302.86 576C1302.86 663.92 1382.14 719.46 1344 768C1306.71 815.46 1248 768 1152 768C1105.74 768 1096.51 788.96 1059.47 768C1000.51 734.64 1011.66 659.37 960 659.37C904.59 659.37 909.78 731.54 845.33 768C813.78 785.85 806.66 768 768 768C672 768 672 768 576 768C517.12 768 493.17 802.93 458.24 768C397.17 706.93 380.73 670.82 384 576C387.35 478.82 437.05 483.2 471.47 384C503.66 291.2 481.07 281.04 517.22 192"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M960 181.33C942.78 181.33 921.6 186.18 921.6 192C921.6 197.91 943.29 204.8 960 204.8C966.04 204.8 967.11 198.26 967.11 192C967.11 186.52 965.54 181.33 960 181.33"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M1152 298.21C1099.22 298.21 1036.8 339.86 1036.8 384C1036.8 429.64 1099.67 477.77 1152 477.77C1193.93 477.77 1225.31 430.09 1225.31 384C1225.31 340.31 1193.47 298.21 1152 298.21"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M768 514.29C738.4 514.29 701.54 547.61 701.54 576C701.54 601.2 737.46 621.47 768 621.47C791.26 621.47 809.14 600.25 809.14 576C809.14 546.66 792.2 514.29 768 514.29"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M384 32.45C300.12 32.45 206.77 8.18 206.77 0C206.77 -8.05 295.38 0 384 0C401.46 0 418.91 -6.86 418.91 0C418.91 9.37 406.19 32.45 384 32.45"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M768 69.82C740.46 69.82 733.09 24.12 733.09 0C733.09 -10.79 750.55 0 768 0C825.6 0 883.2 -16.09 883.2 0C883.2 18.82 815.52 69.82 768 69.82"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M1144.89 192C1144.89 190.01 1147.98 188.54 1152 188.08C1247.53 177.11 1250.67 167.53 1344 169.14C1364.45 169.49 1364.16 177.62 1379.56 192C1460.16 267.27 1468.61 265.73 1536 348.44C1546.83 361.73 1536 366.22 1536 384C1536 394 1545 401.98 1536 404C1449 423.58 1431.53 435.04 1344 427.2C1319.82 425.04 1329.64 404.53 1312.58 384C1233.64 288.98 1233.15 289.01 1152 196.09C1149.31 193.01 1144.89 194.01 1144.89 192"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M524.8 384C524.8 315.98 533.58 248.47 576 248.47C635.98 248.47 729.6 315.08 729.6 384C729.6 454.84 635.33 528 576 528C532.93 528 524.8 455.75 524.8 384"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M161.28 576C161.28 560.52 177.13 549.52 192 549.52C205.73 549.52 218.48 560.89 218.48 576C218.48 598.13 206.02 624 192 624C177.42 624 161.28 597.76 161.28 576"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M923.43 576C923.43 541.65 928.74 495.16 960 495.16C1016.85 495.16 1099.64 549.05 1099.64 576C1099.64 599.57 1027.98 596.21 960 596.21C939.87 596.21 923.43 592.18 923.43 576"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M522.24 768C522.24 716.91 527.14 632.99 576 628.97C650.02 622.88 675.98 684.66 768 747.79C777.31 754.18 778.67 761.11 778.67 768C778.67 771.22 773.34 768 768 768C672 768 672 768 576 768C549.12 768 522.24 786.43 522.24 768"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
          <path
            d="M1117.3 768C1117.3 701.99 1126.25 608 1152 608C1179.6 608 1224 711.28 1224 768C1224 791.28 1188 768 1152 768C1134.65 768 1117.3 781.99 1117.3 768"
            stroke="rgba(51, 121, 194, 0.86)"
            strokeWidth="2"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1077">
            <rect className="w-full h-full" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg> */}
      <MovingPhones />
    </section>
  );
};

export default HeroSection;
