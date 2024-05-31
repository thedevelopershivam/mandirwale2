import Link from 'next/link';
import { MdDashboard } from "react-icons/md";
import { FaMap, FaUser } from "react-icons/fa";
import { FaOm } from "react-icons/fa6";
import { BiSolidCategoryAlt, BiSolidCity } from "react-icons/bi";
import { MdOutlineTempleHindu } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";

import { MdOutlineTopic } from "react-icons/md";

import { BsFileEarmarkPost } from "react-icons/bs";

import { FaTreeCity } from "react-icons/fa6";


const LeftLink = ({ children, href = "#" }) => {
    return (
        <Link href={href} className='flex gap-1 items-center duration-200 px-3 font-semibold hover:px-4 py-2.5 hover:bg-bgSafron hover:text-textWhite border-b text-textSafron'> {children} </Link>
    )

}


function LeftMenu() {
    return (
        <div className="sticky top-0 left-0 max-w-[calc(250px+6vw)] min-h-screen h-full overflow-y-auto shadow-[8px_0_8px_rgba(100,100,100,.2)] w-full hidden md:block pb-10">
            <section className="flex flex-col">
                <LeftLink href="/admin/dashboard">
                    <span> <MdDashboard color="gray" /> </span>
                    <span> Dashboard </span>
                </LeftLink>
                <LeftLink href="/admin/topic">
                    {/* <span> <BiSolidCategoryAlt /> </span> */}
                    <span> <MdOutlineTopic  color="gray"/> </span>
                    <span> Topic </span>
                </LeftLink>
                <LeftLink href="/admin/category">
                    <span> <BiSolidCategoryAlt  color="gray"/> </span>
                    <span> Category </span>
                </LeftLink>
                <LeftLink href="/admin/sub-category">
                    <span> <TbCategoryPlus  color="gray"/> </span>
                    <span> Sub Category </span>
                </LeftLink>
                <LeftLink href="/admin/country">
                    <span> <FaMap  color="gray"/> </span>
                    <span> Country </span>
                </LeftLink>
                <LeftLink href='/admin/state'>
                    <span> <BiSolidCity  color="gray"/> </span>
                    <span> States </span>
                </LeftLink>
                <LeftLink href='/admin/city'>
                    <span> <FaTreeCity  color="gray"/> </span>
                    <span> City </span>
                </LeftLink>
                <LeftLink href='/admin/religions'>
                    <span> <FaOm  color="gray"/> </span>
                    <span> Religion </span>
                </LeftLink>
                <LeftLink href='/admin/create-post'>
                    <span><BsFileEarmarkPost color="gray" /></span>
                    <span> Create Post </span>
                </LeftLink>
                <LeftLink href='/admin/post'>
                    <span><BsFileEarmarkPost color="gray" /></span>
                    <span> View Post </span>
                </LeftLink>
                <LeftLink>
                    <span> <FaUser  color="gray"/> </span>
                    <span> Create User </span>
                </LeftLink>
            </section>


        </div>
    )
}

export default LeftMenu