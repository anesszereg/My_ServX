import Image from "next/image";

const MovingPhones = () => {
  const images = [
    { url: "/assets/phone.png", main: false, slow: false, small: true, top: "mt-[285px]" ,right:'mr-[-186px]'},
    { url: "/assets/laptop.webp", main: false, slow: false, small: false, top: "mt-[75px]" ,right:'mr-[-290px]' },
    { url: "/assets/laptop2.png", main: true, slow: true, small: false, top: "",right:'mr-[-260px]' },
    { url: "/assets/tablet.webp", main: false, slow: false, small: false, top: "",right:'mr-[-190px]' },
    { url: "/assets/tablet3.webp", main: false, slow: false, small: false, top: "mt-[-97px]",right:'',left:'ml-[80px]' },
    { url: "/assets/tablet2.webp", main: false, slow: false, small: false,top: "mt-[-175px]",right:'mr-[-20px]' },
  ];
  return (
    <div className="absolute right-[-350px] z-[1]   flex items-end  justify-end w-full h-full mt-24  top-0 ">
      {/* faire des telephones qui bougent  */}
        
      <div className=" imageContainer w-full mt-[300px] pr-[-100px]   grid grid-flow-col grid-rows-2 Items-center justify-end justify-items-end align-content-center  h-full">
        {images.map(
          (img, index) =>
            index <= 6 && (
              <div
                key={index}
                className={`relative ${img.slow ? "movingImage" : "fastImage"}  movingImage ${
                  img.small ? "w-[15rem] h-[15rem]  object-contain" : img.main ? "w-[45rem] h-[40rem]  object-contain" : "w-[25rem] h-[25rem]"
                } flex items-start justify-center ${img.top} ${img.left} ${img.right}`}
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
