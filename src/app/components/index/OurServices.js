import Image from "next/image";
import Wrapper from "../Wrapper";
import { H3 } from "../Headings";
import { Handyman } from "@mui/icons-material";
import { FaHandSpock } from "react-icons/fa6";



function Card({ image = "/assets/images/krishna (3).jpg", icon = false, title = "trust", text = "text" }) {
    return <div className="flex justify-center items-center max-w-[300px] ">
        <section className="flex flex-col justify-center items-center gap-1">

            {!icon &&
                <div className="md:w-[calc(160px+10vw)] md:h-[calc(160px+10vw)] min-h-[150px] ">
                    <Image src={image} className="w-full h-full" width={600} height={600} alt="service 1" style={{ objectFit: "contain" }} />
                </div>
            }

            {icon && <div className="md:w-[calc(160px+10vw)] md:h-[calc(160px+10vw)] flex justify-center items-center min-h-[150px]"> {icon} </div>}
            <H3 className="capitalize"> {title} </H3>
            <span className="h-[120px]  w-full">
                {text}
            </span>
        </section>
    </div>
}


function OurServices() {
    return (
        <Wrapper className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-y-9 gap-5 max-w-[1100px]">
            {/* first card */}
            {/* You can read our holy scriptures and share with their love once who can also read. we know it's hard to read but you can read and share only one verse everyday! this way you can read your vedas easily! */}
            <Card
                title="Education"
                text={
                    <>
                        <p>
                            A healthy relationship with the universe, wisdom, compassion, and a nurturing soul are all fostered by spiritual education.
                        </p>
                    </>
                }
            />

            <Card
                title="Awareness"
                text={<>
                    <p>
                        We can achieve inner peace and a deeper understanding of the universe by focusing on spiritual awareness.
                    </p>
                </>}
            />

            <Card
                title="Peace"
                text={
                <p>
                    Peace is the silent, vibrant heart of spirituality, a sanctuary within where every soul can find its harmony and light.
                </p>
                }
            />
        </Wrapper>
    )
}

export default OurServices