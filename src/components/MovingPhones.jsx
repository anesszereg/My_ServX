import Image from "next/image";
import Tempbackgroundimg from "public/assets/work/image-6.jpg";


const MovingPhones = () => {

    return (
        <>
        <Image src={Tempbackgroundimg} className="w-full h-1/4 pb-8" />
        {/* faire des telephones qui bougent  */ }
        </>        
    );
}

export default MovingPhones;