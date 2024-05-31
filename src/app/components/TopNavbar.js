"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";

import { PiHandsPrayingLight } from "react-icons/pi";


// import { GoSearch } from "react-icons/go";




function NavButton({ children, href = "#" }) {
    return (
        <Link href={href} className=' text-red-800 font-semibold hover:text-textNeel hover:scale-[1.06] duration-300 text-lg'>
            {children}
        </Link>
    )
}





function NavbarSearch({ isDropdownVisible = false }) {
    return <div className='flex flex-col  relative w-full md:ml-5'>

        <label className='flex border-[1px] border-gray-200 rounded w-full max-w-[450px]'>
            <PiHandsPrayingLight size={35} className='px-2 bg-gray-200 ' />
            <input type="search" className='px-2 py-1 w-full focus:outline-none max-w-[450px]' placeholder='search here' onChange={(e) => console.log(e.target.value)} />
        </label>

        {
            isDropdownVisible && <section className='absolute left-0 top-full w-full max-w-[450px] p-3  bg-white z-[999] shadow-lg rounded'>
                <p>
                    lorem ipsum dolar sit amet
                </p>
            </section>
        }
    </div>
}

function TopNavbar() {
    const [dropdownVisible, setDropdownVisible] = useState();
    return (
        <div className='w-full bg-bgWhite flex justify-between items-center gap-5 px-[calc(15px+2vw)] ml-auto h-16 rounded-none shadow-lg mt-1 border-b-[2px] border-b-red-400 '>

            <section className='text-[calc(17px+.5vw)] font-medium '>
                <span> Logo </span>
            </section>

            <NavbarSearch />


            <section className='hidden md:flex justify-end gap-6 w-full'>
                <NavButton href="#"> Temples </NavButton>
                <NavButton href="#"> Horoscope </NavButton>
                <NavButton href="#"> Bhagwat Gita </NavButton>
                {/* <NavButton href="#"> Contact Us </NavButton> */}
            </section>
            <section className='block md:hidden '>
                <FaBars size={30} className="cursor-pointer text-white hover:text-textDanger duration-300 hover:scale-[1.02]" />
            </section>

        </div>
    )
}

export default TopNavbar