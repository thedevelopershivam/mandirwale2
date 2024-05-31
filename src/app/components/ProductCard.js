import React from 'react'
// import { H1, H2, H3 } from './Headings'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard({ href = "#", image = "/assets/images/mobile-card.jpg", title, num, content, tagName }) {

    return (
        <Link href={href} className='w-full h-[280px] rounded-md p-0 group/card duration-300 shadow-shadowDown hover:shadow-none border-safron-light border-[1px] border-gray-200 '>
            <section className='h-auto max-h-[175px]'>
                <Image src={image} className='h-auto  w-full rounded-t-md max-h-[175px]' width={400} height={400} alt="First card" style={{ objectFit: "cover" }} />
            </section>
            <section className='h-[100px] py-3 px-3 flex flex-col gap-2'>
                <div>
                    <span className={`text-textWhite text-center bg-bgSafron px-2 rounded inline-flex font-semibold bg-red-400 line-clamp-1 capitalize `}>
                        {tagName}
                    </span>
                </div>

                <div className='font-semibold leading-4 flex justify-between items-center gap-2 text-[15px]'>
                    <span className='line-clamp-2 leading-[25px] capitalize h-14 text-gray-600'>
                        {title || "lord ganesha temple in Rishikesh Uttarakhand"}
                    </span>
                    {
                        num &&
                        <span className='bg-bgNeel w-[25px] h-[25px] text-textWhite p-[3px] rounded-full text-[12px] flex justify-center items-center'>
                            {num}+
                        </span>
                    }

                </div>
                {
                    content &&
                    <span className='line-clamp-5 leading-5'>
                        Vit que la couronne» face d'une de pleure-t-elle l'abri force en, faite qui vainqueur les loisirs le ce, mal de gaze tes pour vois, etre mystérieux robuste exquise mais tete s'abreuve son, d'un doué regard se ce sincere faite visage.
                    </span>
                }
            </section>
        </Link>
    )
}

export default ProductCard