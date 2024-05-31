"use client";
import * as React from 'react';

import MuiModal from '@/app/components/MuiModal';
import LabelInput from "@/app/components/form/LabeInput";
import Button from '@/app/components/Button';
import { useState, useEffect } from 'react';

import axiosInstance from '@/app/util/axios';
import { DeleteButton, EditButton } from '@/app/components/admin/ActionButtons';
import { PiTrashDuotone } from 'react-icons/pi';

import Image from 'next/image';
import { TablePagination } from '@mui/material';
import Error from '@/app/components/Error';
import { MdEditNote } from 'react-icons/md';

function Td({ children, className }) {
    return (
        <td className={`font-semibold text-center w-auto px-3 whitespace-nowrap min-w-20 ${className}`}>
            {children}
        </td>
    )
}

export default function page() {

    const [page, setPage] = useState(0);
    const [country, setCountry] = useState({});
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState();
    const [data, setData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);
    const [editCountry, setEditCountry] = React.useState({});
    const [showEditModal, setShowEditModal] = React.useState(false);

    // getting all data
    async function getAllCountries() {
        setIsLoading(true);
        try {
            const data = await axiosInstance.get("/get-all-posts")
            setData(data?.data?.data);
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false);
            console.log(data);
        }
    }

    useEffect(() => {
        getAllCountries();
    }, [])


    const deletePost = async (item) => {
        const rec = await axiosInstance.delete(`/delete-post/${item.id}`)
        setData(rec?.data?.data);
    }

    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // pagination


    
    return (
        <section className=' w-full max-w-full md:max-w-[calc(100%-330px)] px-5'>
            
            <section className="flex flex-col w-full max-h-[600px]">
                <section className='max-h-[500px] shadow-lg mt-5 border relative w-full overflow-x-auto hs overflow-auto vs mx-auto'>
                    {
                        isLoading ? <span className='text-2xl font-extrabold'> loading... </span> :
                        <table className="text-center w-full mx-auto">
                            <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full">
                                <tr>
                                    <th className="px-2">Sno.</th>
                                    <th className="px-2">Title</th>
                                    <th className="px-2">Files</th>
                                    <th className="px-2">Topic</th>
                                    <th className="px-2">Category</th>
                                    <th className="px-2">Sub-Catgory</th>
                                    <th className="px-2">Action</th>
                                    {/* <th className="px-2">Sub-Catgory</th> */}
                                </tr>
                            </thead>

                            <tbody>
                                {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => {
                                        return (
                                            <tr className="min-h-12 h-12 odd:hover:bg-bgNeel even:hover:bg-bgSafron hover:text-white  odd:bg-slate-50 duration-200" tabIndex={-1} key={index}>
                                                <Td>   
                                                    {(rowsPerPage * page + index) + 1}
                                                </Td>

                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item?.title || "not define"}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        
                                                        <Image src={JSON.parse(item?.processFile)[0] !== undefined && JSON.parse(item?.processFile)[0] !== null  ? `${JSON.parse(item?.processFile)[0]}` : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item?.category?.category}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item?.subCategory?.subCategory}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item?.lowerCategory?.lowerCategory}
                                                    </div>
                                                </Td>

                                                {/* <Td>
                                                    <div className="mx-auto flex justify-center items-center">
                                                        <Image src={item.file !== 'no file' ? `${item.file}` : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                    </div>
                                                </Td> */}

                                                <Td>
                                                    <section className='flex gap-2 items-center justify-center'>
                                                        <DeleteButton onClick={() => deletePost(item)}>
                                                            <PiTrashDuotone size={20} />
                                                        </DeleteButton>

                                                        <EditButton href={`./country/${item.id}`}>
                                                            <MdEditNote size={20} />
                                                        </EditButton>
                                                    </section>
                                                </Td>

                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    }
                </section>

                <TablePagination
                    className="h-20 z-0"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="section"
                    count={data?.length || 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </section>
        </section>

    );
}