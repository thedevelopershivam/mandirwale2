import Image from "next/image"
import Link from "next/link"

function RoundIcon() {
    return (
        <Link href="" className="flex justify-center items-center flex-col gap-1 group/round duration-200 w-[180px]  ">

            <Image src="/assets/images/first.jpg" width={180} height={180} className="w-[calc(90px+2vw)] h-[calc(90px+2vw)] rounded-full shadow-shadowDown hover:shadow-none border-[1px] border-red-900 group-hover/round:shadow-none" alt="images" />
            <div className="flex flex-col gap-1 text-center font-semibold text-[15px] group-hover/round:text-textMaroon">
                <span>
                    Lord Ganesha
                </span>
                <span>
                    23
                </span>
            </div>
        </Link>
    )
}

export default RoundIcon