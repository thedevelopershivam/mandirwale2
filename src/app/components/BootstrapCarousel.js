import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const images = [
    "./assets/images/first.jpg",
    "./assets/images/first.jpg",
    "./assets/images/first.jpg",
];
function BootstrapCarousel() {
    return (
        <div>
            <Carousel useKeyboardArrows={true} showThumbs={false} infiniteLoop={true} stopOnHover={true} autoFocus={true} autoPlay={true}>
                {images.map((URL, index) => (
                    <div className="slide" key={index}>
                        <div className="p-3 m-4 shadow-lg">
                            <img alt="sample_file" className="max-h-[400px] h-auto" src={URL} key={index} />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
export default BootstrapCarousel;


