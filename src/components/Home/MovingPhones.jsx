import Image from "next/image";

const MovingPhones = () => {
  const images = [
    { url: "/assets/phone.png", main: false, slow: false, small: true, top: "top-28" },
    { url: "/assets/laptop.webp", main: true, slow: true, small: false, top: "top-12" },
    { url: "/assets/tablet.webp", main: false, slow: false, small: false, top: "-top-40" },
    { url: "/assets/tablet.webp", main: false, slow: true, small: true, top: "top-12" },
    { url: "/assets/tablet2.webp", main: false, slow: false, small: true, top: "top-20" },
    { url: "/assets/tablet3.webp", main: false, slow: true, small: true, top: "top-20" },
  ];
  return (
    <div className="absolute left-0 z-[1] overflow-x-hidden flex items-end  justify-end w-[150vw] h-full pt-20  top-0 ">
      {/* faire des telephones qui bougent  */}
        
      <div className=" imageContainer place-items-center w-full  overflow-x-hidden  overflow-y-hidden  flex   h-full">
        {images.map(
          (img, index) =>
            index <= 2 && (
              <div
                key={index}
                className={`relative ${img.slow ? "movingImage" : "fastImage"} ${img.top}   movingImage ${
                  img.small ? "w-52 h-52" : img.main ? "w-[50rem] h-[50rem]" : "w-[40rem] h-[40rem]"
                }`}
              >
                <Image src={img.url} fill className="w-full h-full object-contain object-center" />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MovingPhones;