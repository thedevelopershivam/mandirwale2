"use client";

import * as React from 'react';
import Image from 'next/image';

function Td({ children, className }) {
    return (
        <td className={`font-semibold text-center w-auto px-3 whitespace-nowrap min-w-20 ${className}`}>
            {children}
        </td>
    )
}

export default function page() {

    return (
        <section className='w-full px-5 mt-5'>
            <section className="flex flex-col w-full max-h-[600px]">
                <section className='max-h-[500px] border relative w-full overflow-x-auto hs overflow-y-auto vs mx-auto'>

                    <table className="text-center w-full mx-auto">
                        <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full">
                            <tr>
                                <th className="px-2">Sno.</th>
                                <th className="px-2">File</th>
                                <th className="px-2">Religions</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="min-h-12 h-12 odd:hover:bg-bgNeel even:hover:bg-bgSafron hover:text-white  odd:bg-slate-50 duration-200 text-center" tabIndex={-1} >
                                <Td>
                                    1
                                </Td>
                                <Td>
                                    <div className="mx-auto flex justify-center items-center">
                                        Hinduisam
                                    </div>
                                </Td>
                                <Td>
                                    <Image src={"/assets/images/first.jpg"} className='w-10 h-10 rounded-full mx-auto' width={60} height={60} alt="photo title" loading='lazy' />
                                </Td>
                            </tr>

                            <tr className="min-h-12 h-12 odd:hover:bg-bgNeel even:hover:bg-bgSafron hover:text-white  odd:bg-slate-50 duration-200 text-center" tabIndex={-1} >
                                <Td>
                                    2
                                </Td>
                                <Td>
                                    <div className="mx-auto flex justify-center items-center">
                                        Muslims
                                    </div>
                                </Td>
                                <Td>
                                    <Image src={"/assets/images/first.jpg"} className='w-10 h-10 rounded-full mx-auto' width={60} height={60} alt="photo title" loading='lazy' />
                                </Td>
                            </tr>

                            <tr className="min-h-12 h-12 odd:hover:bg-bgNeel even:hover:bg-bgSafron hover:text-white  odd:bg-slate-50 duration-200 text-center" tabIndex={-1} >
                                <Td>
                                    3
                                </Td>
                                <Td>
                                    <div className="mx-auto flex justify-center items-center">
                                        Christians
                                    </div>
                                </Td>
                                <Td>
                                    <Image src={"/assets/images/first.jpg"} className='w-10 h-10 rounded-full mx-auto' width={60} height={60} alt="photo title" loading='lazy' />
                                </Td>
                            </tr>


                        </tbody>
                    </table>

                </section>



            </section>
        </section>

    );
}