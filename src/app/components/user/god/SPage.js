import React from 'react'
import { useParams, useSearchParams } from 'next/navigation';
import Stack from '@mui/material/Stack';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PaginationButton from './PaginationButton';
import ProductCard from '@/app/components/ProductCard';




function SPage({ data }) {

    const param = useParams();
    const queryParam = useSearchParams();
    const pageNum = queryParam.get('page');

    

    const queryString = queryParam.toString().replace(`page=${pageNum}`, '');
    const [rowsPerPage, setRowsPerPage] = React.useState(12);
    
    const count = Math.ceil(data?.length / rowsPerPage);
    const items = Array.from({ length: count }, (_, index) => index);


    return (<div classsName="w-full flex flex-column gap-4 ">

        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
            {
                data?.slice((pageNum - 1) * rowsPerPage, (pageNum - 1) * rowsPerPage + rowsPerPage).map((item, index) => <ProductCard href={`${param.category}/blog/${item.id}?title=${item.title}`} tagName={item.lowerCategory.lowerCategory} title={item.title} key={index} />)
            }
        </div>

        <Stack className="float-right mt-10" direction="row" spacing={2}>
            <PaginationButton href={`?page=${Number(pageNum) - 1}${queryString}`} count={count} pageNum={pageNum}>
                <IoIosArrowBack size={24} />
            </PaginationButton>
            {
                items.map((_, index) =>
                <PaginationButton
                    href={`?page=${index+1}${queryString}`}
                    count={count}
                    key={index}
                        className={`${Number(pageNum) === (index + 1) ? "bg-bgSafron text-textWhite" : "bg-white"}  `}
                >
                    {index + 1}
                </PaginationButton>)
            }

            <PaginationButton href={`?page=${Number(pageNum) + 1}${queryString}`} disable={count} count={count} pageNum={pageNum}>
                <IoIosArrowForward size={24} />
            </PaginationButton>
        </Stack>


        <section className="my-60"> </section>
    </div>


    )
}

export default SPage