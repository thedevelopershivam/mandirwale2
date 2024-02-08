import Image from "next/image"
import IconText from "./IconText"
import { FaMapPin } from "react-icons/fa";


function SuggestedPost() {
    return (
        <section className="flex flex-col w-full bg-white shadow rounded-full hover:bg-bgSafron group/sugCard duration-150 snap-start border-[1px] border-transparent hover:scale-[1.03]">

            <div className="flex gap-2 p-2">

                <Image src="/assets/images/first.jpg" className="w-16 h-16 rounded-full" width={60} height={60} alt="POST Title" />

                <section className="flex flex-col">
                    <span className="font-semibold text-textSafron line-clamp-1 text-sm group-hover/sugCard:text-textWhite">
                        Mir's geliebet deinen der sehr so laue fort wilde, fort.
                    </span>
                    <span className="text-sm line-clamp-1 group-hover/sugCard:text-textWhite">
                        Tout jusqu'aux miraculeux grande ô la le parce gaze demain, crispée prince sournois la moqueur qu'un, que loisirs le fleuve.
                    </span>
                    <div className="flex justify-start text-sm">
                        <IconText className="group-hover/sugCard:text-textWhite" icon={<FaMapPin />} text="Andhra Pradesh" />
                    </div>
                </section>

            </div>
        </section>

    )
}

export default SuggestedPost