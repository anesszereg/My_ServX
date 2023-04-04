import Image from "next/image";

const MovingPhones = () => {
  const images = [
    { url: "/assets/tablet2.webp", main: false, slow: false, small: true, top: "mt-[300px]" ,right:'mr-[-150px]'},
    { url: "/assets/tablet.webp", main: false, slow: false, small: false, top: "mt-[50px]" ,right:'mr-[-330px]' },
    { url: "/assets/laptop.webp", main: true, slow: true, small: false, top: "",right:'mr-[30px]' },
    { url: "/assets/tablet.webp", main: true, slow: true, small: false, top: "mt-[-170px]",right:'mr-[-110px]' },
    { url: "/assets/tablet2.webp", main: false, slow: false, small: true, top: "" },
    { url: "/assets/tablet3.webp", main: false, slow: true, small: true,top: "mt-[-170px]",right:'mr-[-50px]' },
  ];
  return (
    <div className="absolute right-0 z-[1] overflow-x-hidden overflow-y-hidden  flex items-end  justify-end w-[100vw] h-full mt-24  top-0 ">
      {/* faire des telephones qui bougent  */}
        
      <div className=" imageContainer w-full overflow-x-hidden mt-[300px] pr-[-100px] overflow-y-hidden  grid grid-flow-col grid-rows-2 Items-center justify-end justify-items-end align-content-center  h-full">
        {images.map(
          (img, index) =>
            index <= 6 && (
              <div
                key={index}
                className={`relative ${img.slow ? "movingImage" : "fastImage"}  movingImage ${
                  img.small ? "w-[15rem] h-[15rem]  object-contain" : img.main ? "w-[30rem] h-[30rem]  object-contain" : "w-[20rem] h-[20rem]"
                } flex items-start justify-center ${img.top}   ${img.right}`}
              >
                <Image src={img.url}  fill className="w-full h-full object-contain object-center" />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MovingPhones;
