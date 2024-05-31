import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

function Carousel() {
    return (
        <Carousel>
            <div>
                <Image src="/assets/images/krishna (3).jpg" height={400} width={400} className="w-full max-h-[400px] h-auto" style={{ objectFit:"contain" }}/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <Image src="/assets/images/krishna (3).jpg" height={400} width={400} className="w-full max-h-[400px] h-auto" style={{ objectFit:"contain" }}/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <Image src="/assets/images/krishna (3).jpg" height={400} width={400} className="w-full max-h-[400px] h-auto" style={{ objectFit:"contain" }}/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

export default Carousel