import { PiEyeLight, PiMapPinLineThin } from "react-icons/pi"
import IconText from "./IconText"
import LikeButton from "./LikeButton"
import Image from "next/image"
import { IoCalendarOutline } from "react-icons/io5"
import { H3 } from "./Headings"
import Badge from "./Badge"

function BlogFull() {
    return (
        <section className="w-full flex flex-col  rounded-md shadow-shadowDownL pb-3 border-[2px] border-transparent bg-bgWhite relative">
            <section className="absolute left-0 right-0 top-2 flex justify-between items-center w-[100%] mx-auto px-3">
                <IconText className="bg-[#fff] px-2 rounded-full font-semibold" icon={<PiEyeLight />} text={25} />

                <LikeButton />
            </section>
            <Image src="/assets/images/first.jpg" className="rounded-t-md" width={2160} height={2160} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

            <div className="flex justify-between flex-wrap px-2 my-2 gap-y-0 gap-x-2 font-medium">

                <IconText
                    icon={<PiMapPinLineThin size={22} />}
                    text="Andhra Pradesh, India"
                />

                <IconText
                    icon={<IoCalendarOutline size={22} />}
                    text="2023-12-20 04:30 AM"
                />
            </div>
            <div className="flex justify-between items-center flex-wrap px-3 gap-3 my-1">
                <H3 className="txet-textNeel"> Lord Ganesha  </H3>
                <Badge />
            </div>

            <section className="px-3">
                <p>
                    Take the hassle out of icons in your website.
                    Font Awesome is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.
                </p>
            </section>
        </section>
    )
}

export default BlogFull