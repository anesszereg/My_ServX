import Image from "next/image";

const MovingPhones = () => {

  const images = [
    { url: "/assets/laptop.webp", rate: 1 ,small:false},
    { url: "/assets/laptop2.png", rate: 1 ,small:false},
    { url: "/assets/phone.png", rate: 1 ,small:true},
    { url: "/assets/tablet.webp", rate: 1 ,small:true},
    { url: "/assets/tablet2.webp", rate: 1 ,small:true},
    { url: "/assets/tablet3.webp", rate: 1 ,small:true},
  ];
  return (
  <div className="absolute z-[1] overflow-x-visible flex items-end  justify-end w-full h-full pt-20 left-[10%] top-0 ">
    {/* faire des telephones qui bougent  */}
        <div className="w-full max-w-6xl  place-items-center overflow-x-visible overflow-y-hidden  flex flex-wrap justify-evenly h-full">
            {images.map((img,index)=>(
                <div className={`relative movingImage ${img.small ? "w-52 h-52" :"w-[30rem] h-[30rem]"}`}>
                <Image src={img.url} fill className="w-full h-full object-contain object-center" />

                </div>
            ))}
        </div>
    </div>);
};

export default MovingPhones;
