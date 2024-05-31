import Image from "next/image"
import Link from "next/link"

function RoundIcon({name = "Ram Ji", href= "#", count="1"}) {
    return (
        <Link href={href} className="flex justify-center items-center flex-col gap-2.5 group/round duration-200 min-w-full sm:min-w-[180px]  snap-start">

            <Image src="/assets/images/first.jpg" width={180} height={180} className="w-[calc(90px+2vw)] h-[calc(90px+2vw)] rounded-full shadow-shadowDown duration-300 hover:shadow-none border-[1px] border-red-900 group-hover/round:shadow-none group-hover/round:scale-[.95] " alt="images" />

            <div className="flex flex-col gap-1 text-center font-semibold text-[15px] group-hover/round:text-textMaroon">
                <span>
                    {name}
                </span>
                <span>
                    {count}
                </span>
            </div>
        </Link>
    )
}

export default RoundIcon