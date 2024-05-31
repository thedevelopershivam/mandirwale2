import React from 'react'
import { H2, H3 } from './Headings'
import Link from 'next/link'

function Blog({ href = "#", src = "/assets/images/mobile-card.jpg", date = new Date(), title = "title", description = "Description" }) {

    function formatDateTime(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const formattedHours = hours.toString().padStart(2, '0');

        // Formatting the string as per the required format
        return `${day}-${month}-${year} ${formattedHours}:${minutes}${ampm}`;
    }


    return (
        <Link href={href} className='flex flex-col gap-4 w-full h-auto rounded-md shadow-shadowDown bg-bgWhite hover:shadow-none duration-200 border-[1px] border-gray-200 text-start'>
            <section>
                <img src={src} className='w-full h-auto rounded-t-md' alt="hey there" />
            </section>

            <span className='text-textMaroon px-3 text-sm leading-3 ml-auto'>
                {
                    formatDateTime(date)
                }
            </span>

            <section className='border-b-[.1px] border-gray-200 '>
                <div className='px-3 font-medium text-[calc(16px+.2vw)] line-clamp-2 h-auto sm:h-14  capitalize'>
                    {title}
                </div>
            </section>

            {/* h-[calc(100px)] */}
            <div className="line-clamp-4 px-3 h-auto sm:h-24" dangerouslySetInnerHTML={description} />

            <section className='rounded-b-md py-1.5 flex justify-center items-center font-semibold '>
                Read More
            </section>

        </Link>
    )
}

export default Blog