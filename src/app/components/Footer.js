import Image from "next/image"
import { H3 } from "./Headings"
import Logo from "./Logo"
import Link from "next/link"


function Footer() {
    return (
        <div className="w-full p-5 bg-[rgba(100,100,100,.1)] ">
            <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-4">
                {/* first  */}
                <div className="flex flex-col gap-2">
                    <span className="underline font-semibold">
                        About Us:
                    </span>
                    <p className="text-sm">
                        Wird zerstreuet das die busen euch ihr . Ich ertönt vor hören der wird, naht mein des lebt das gedränge.
                    </p>
                    <span>
                        <Logo />
                    </span>
                </div>

                {/* second */}
                <div className="flex flex-col gap-2">
                    <span className="underline font-semibold">
                        Important Links:
                    </span>
                    <Link href="#"> Contact Us </Link>
                    <Link href="#"> About Us </Link>
                    <Link href="#"> Bhagwat Gita </Link>
                    <Link href="#"> Shlokas </Link>
                    <Link href="#"> Horoscope </Link>
                    <Link href="#"> Temples </Link>
                </div>

                {/* third */}
                <div className="flex flex-col gap-2">
                    <span className="underline font-semibold">
                        Famous Temples:
                    </span>
                    <Link href="#"> Krishna, Uttarakhand </Link>
                    <Link href="#"> Ram Mandir, Ayodhya </Link>
                    <Link href="#"> Krishna Mandir, Mathura </Link>
                    <Link href="#"> Parmart, Uttarakhand </Link>
                    <Link href="#"> Beetle Aashram, Uttarakhand </Link>
                    <Link href="#"> Kujapuri, Uttarakhand </Link>
                </div>

{/* fourth */}

                <div className="flex flex-col gap-2">
                    <span className="underline font-semibold">
                        Company Location:
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default Footer