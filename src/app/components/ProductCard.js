import React from 'react'
import { H1, H2, H3 } from './Headings'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard({ href = "#", image = "/assets/images/mobile-card.jpg", title = "Lord Ganesha temple", num, content }) {
    return (
        <Link href={href} className='w-full h-auto rounded-md p-0 group/card duration-300 shadow-shadowDown hover:shadow-none border-safron-light border-[.1px] border-bMaroon'>
            <section className='h-auto'>
                <Image src={image} className='h-auto  w-full rounded-t-md' width={400} height={400} alt="First card" style={{ objectFit: "cover" }} />
            </section>
            <section className='h-[100px] py-3 px-2 flex flex-col gap-2'>
                <div className='font-semibold text-textMaroon leading-4 flex justify-between items-center gap-2'>

                    <span className='line-clamp-1 capitalize'>
                        {title || "lord ganesha temple"}
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
                    <span className='line-clamp-2 leading-5'>
                        Vit que la couronne» face d'une de pleure-t-elle l'abri force en, faite qui vainqueur les loisirs le ce, mal de gaze tes pour vois, etre mystérieux robuste exquise mais tete s'abreuve son, d'un doué regard se ce sincere faite visage.
                    </span>
                }
            </section>
            <section className='h-[35px] flex justify-center items-center bg-bgNeel text-white font-semibold rounded-b-md'>
                View More
            </section>
        </Link>
    )
}

export default ProductCard