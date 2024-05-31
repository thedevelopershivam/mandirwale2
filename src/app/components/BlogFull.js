import { PiEyeLight, PiMapPinLineThin } from "react-icons/pi"
import IconText from "./IconText"
import LikeButton from "./LikeButton"
import Image from "next/image"
import { IoCalendarOutline } from "react-icons/io5"
import { H3 } from "./Headings"
import Badge from "./Badge"
import Slider from "./Slider"
import FormatedDate from "./FormatedDate"


function BlogFull({ data, category }) {

    console.log({category});

    const file = JSON.parse(data?.processFile);
    console.log({data});

    
    return (
        <section className="w-full flex flex-col rounded-md shadow-shadowDownL pb-3 border-[2px] border-transparent bg-white relative mb-20">

            <div className="bg-white">
                <Slider images={file} title={data.title}/>
            </div>

            <div className="flex justify-between flex-wrap px-2 my-2 gap-y-2 gap-x-2 font-medium capitalize">

                <IconText
                    icon={<PiMapPinLineThin size={22} />}
                    text={`${data?.address?.city?.city}, ${data?.address?.state?.state}, ${data?.address?.country?.country}`}
                />

                <IconText
                    icon={<IoCalendarOutline size={22} />}
                    text={`${FormatedDate(data.createdAt) }`}
                />
            </div>
            <div className="flex  flex-col-reverse md:flex-row md:justify-between md:items-center px-3 gap-3 my-2 md:my-1  ">
                <H3 className="text-textNeel capitalize"> 
                {data?.title}  
                </H3>
                <span>
                    <Badge href={`/${category}?page=1&god=${data?.lowerCategory?.lowerCategory}`} badge={data?.lowerCategory?.lowerCategory} />
                </span>
            </div>

            <section className="px-3 first-letter:capitalize first-letter:text-[30px] first-letter:font-serif" dangerouslySetInnerHTML={{__html: data?.hindiPost }}>
            </section>
        </section>
    )
}

export default BlogFull