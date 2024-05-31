import React from 'react'
import { H3 } from '@/app/components/Headings'
import SelectDropdown from '@/app/components/SelectDropdown'
import CheckboxLabel from '@/app/components/CheckboxLabel'
import Button from '@/app/components/Button'

function Filter({ filterList, label="label", queryParam = null, value, onChange }) {



    return (
        <section className='md:flex flex-col sticky top-2 w-full max-w-[calc(200px+6vw)] h-[450px] hidden'>
            <H3> Filter </H3>
            <div className='rounded flex flex-col gap-4 shadow-lg px-3 py-4 w-full'>
                {
                    filterList?.map((item, index) => <SelectDropdown value={value} queryParam={queryParam} option={item} key={index} label={label[index]}  onChange={(e)=> onChange(e, label)}/> )
                }
                <Button />
            </div>
        </section>

    )
}

export default Filter