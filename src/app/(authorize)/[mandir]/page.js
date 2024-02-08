"use client"
import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import { H3 } from '../../components/Headings';
import SelectDropdown from '@/app/components/SelectDropdown';
import Button from '@/app/components/Button';
import ProductCard from '@/app/components/ProductCard';
import CheckboxLabel from '@/app/components/CheckboxLabel';
import { useParams } from 'next/navigation';

function page() {
    const param = new useParams();
    console.log(param)
    return (
        <Wrapper className="flex px-1 sm:px-[calc(0px+4vw)] md:gap-4 mt-5">
            <section className='md:flex flex-col sticky top-2 w-full max-w-[calc(200px+6vw)] h-[450px] hidden'>
                <H3> Filter </H3>
                <div className='rounded flex flex-col gap-4 shadow-lg px-3 py-4 w-full'>
                    <SelectDropdown />
                    <SelectDropdown />

                    <section className='flex flex-col items-start gap-1 max-h-[170px] overflow-y-auto vs'>
                        <CheckboxLabel />
                        <CheckboxLabel />
                        <CheckboxLabel />
                    </section>

                    <Button />
                </div>
            </section>

            <section className='w-full'>
                <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 shadow w-full p-5'>
                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                    <ProductCard
                        num={20}
                        content={"Froher der wirklichkeiten schatten zug bang mir freundliche, aus schauer ach macht einer besitze lebens mögt tränen ich. Die ergreift."} />

                </div>
            </section>
        </Wrapper>
    )
}

export default page