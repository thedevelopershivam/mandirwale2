import Link from "next/link"
import { IoHomeOutline } from "react-icons/io5";



function Stepper() {
    const steps = [
        { url: "#", title: "label" },
        { url: "#", title: "Himachal Pradesh" },
        { url: "#", title: "Vishnu BHagwan" },
        { url: "#", title: "Krishna Temple" },
        { url: "#", title: "label1" },
        { url: "#", title: "label2" },
    ]


    return (
        <div className="flex gap-1 font-semibold text-[15px] flex-wrap">
            <label className="flex justify-center items-center hover:text-textMaroon">
                <Link href={"/"}>
                    <IoHomeOutline />
                </Link>
                <span className="ml-2 mr-1">/</span>
            </label>
            {

                steps.map((item, index) =>
                    <label className={`flex justify-center items-center hover:text-textMaroon ${(steps.length - 1) === index && "text-gray-600"} `} key={index}>
                        <Link href={item.url}> {item.title} </Link>
                        <span className={`ml-2 mr-1  ${(steps.length - 1) === index && "hidden"}`}>/</span>
                    </label>
                )
            }

        </div>
    )
}

export default Stepper