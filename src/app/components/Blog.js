import React from 'react'
import { H2, H3 } from './Headings'
import Link from 'next/link'

function Blog() {
    return (
        <Link href="" className='flex flex-col gap-1 w-full h-auto rounded-md shadow-shadowDown hover:shadow-none duration-200 border-[1px] border-transparent'>
            <img src="/assets/images/mobile-card.jpg" className='w-full h-auto rounded-t-md' alt="hey there" />
            <span className='font-semibold text-textMaroon px-2 text-sm leading-3 ml-auto'>
                2020-12-20 09:46 AM
            </span>
            <section className='py-1 border-b-[.1px] border-gray-200 '>

                <div className='px-2 font-medium text-[calc(16px+.2vw)] line-clamp-2 leading-6'>
                    Lune ressacs aux confiture mer ont fileur, qu'un je acteurs je confiture du genoux ameres trombes montait. Mers que béhémots.
                </div>
            </section>
            {/* h-[calc(100px)] */}
            <p className='px-2 line-clamp-4'>
                Él kínt teher
            </p>

            <section className='rounded-b-md py-1.5 flex justify-center items-center bg-bgMaroon font-semibold text-white'>
                View More
            </section>
        </Link>
    )
}

export default Blog