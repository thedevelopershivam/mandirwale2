import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

function Slider({ images = "", title="" }) {
    return (
        <Carousel
            className="max-h-[450px]"
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            dynamicHeight={true}
            emulateTouch={true}
            useKeyboardArrows={true}
        >
            
            {
                images.map((item, index) => 
                <Image 
                key={index} 
                src={item || "/assets/images/first.jpg"} 
                className="max-h-[450px] w-full h-full"
                width={1260}
                height={1260} 
                alt={`${title} ${index}`}
                title={`${title} ${index}`}
                style={{objectFit:"cover"}} 
                /> )
            }

        </Carousel>
    );
}

export default Slider