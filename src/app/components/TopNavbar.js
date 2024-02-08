import Link from 'next/link'
import React from 'react'

function NavButton({ children, href = "#" }) {
    return (
        <Link href={href} className='text-textWhite font-medium hover:text-textDanger hover:scale-[1.06] duration-300'>
            {children}
        </Link>
    )
}


function TopNavbar() {
    return (
        <div className='w-full h-[calc(50px+1vw)] flex justify-between items-center px-[calc(30px+2vw)] shadow-lg bg-bgSafron border-b-2 border-b-transparent'>

            <section className='text-white text-[calc(17px+.5vw)] font-medium '>
                <span> Logo </span>
            </section>
            <section className='hidden md:flex gap-4'>
                <NavButton href="#"> Home </NavButton>
                <NavButton href="#"> Home </NavButton>
                <NavButton href="#"> Home </NavButton>
                <NavButton href="#"> Home </NavButton>
            </section>

        </div>
    )
}

export default TopNavbar