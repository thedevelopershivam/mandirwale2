import Link from 'next/link';
import { MdDashboard } from "react-icons/md";
import { FaMap, FaUser } from "react-icons/fa";
import { FaOm } from "react-icons/fa6";
import { BiSolidCategoryAlt, BiSolidCity } from "react-icons/bi";
import { MdOutlineTempleHindu } from "react-icons/md";

const LeftLink = ({ children, href = "#" }) => {
    return (
        <Link href={href} className='flex gap-1 items-center duration-200 px-3 font-semibold hover:px-4 py-2.5 hover:bg-bgSafron hover:text-textWhite border-b text-textSafron'> {children} </Link>
    )

}


function LeftMenu() {
    return (
        <div className="sticky top-0 left-0 max-w-[calc(250px+6vw)] max-h-screen h-[calc(100vh-60px)] overflow-y-auto shadow-[8px_0_8px_rgba(100,100,100,.2)] w-full hidden md:block">
            <section className="flex flex-col">
                <LeftLink href="./dashboard">
                    <span> <MdDashboard /> </span>
                    <span> Dashboard </span>
                </LeftLink>
                <LeftLink href="./category">
                    <span> <BiSolidCategoryAlt /> </span>
                    <span> Category </span>
                </LeftLink>
                <LeftLink>
                    <span> <FaMap /> </span>
                    <span> Country </span>
                </LeftLink>
                <LeftLink>
                    <span> <BiSolidCity /> </span>
                    <span> States </span>
                </LeftLink>
                <LeftLink>
                    <span> <MdOutlineTempleHindu /> </span>
                    <span> Religion </span>
                </LeftLink>
                <LeftLink>
                    <span> <FaOm /> </span>
                    <span> Gods </span>
                </LeftLink>
                <LeftLink>
                    <span> <FaUser /> </span>
                    <span> Create User </span>
                </LeftLink>
            </section>


        </div>
    )
}

export default LeftMenu