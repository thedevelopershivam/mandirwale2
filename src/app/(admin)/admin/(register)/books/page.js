"use client";
import * as React from 'react';

import { useState, useEffect } from 'react';

import axiosInstance from '@/app/util/axios';
import { DeleteButton, EditButton, ViewButton } from '@/app/components/admin/ActionButtons';
import { PiTrashDuotone } from 'react-icons/pi';

import Image from 'next/image';
import { TablePagination } from '@mui/material';
import Error from '@/app/components/Error';
import { MdEditNote } from 'react-icons/md';
import { IsLoading } from '@/app/components/IsLoading';
import Link from 'next/link';
import { BsEye } from 'react-icons/bs';
import { CustomModal } from '@/app/components/CustomModal';
import parse from 'html-react-parser';


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
    const [viewData, setViewData] = React.useState();
    const [viewModal, setViewModal] = React.useState(false);


    // getting all data
    async function getAllCountries() {
        setIsLoading(true);
        try {
            const data = await axiosInstance.get("/get-books")
            console.log({ data })
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


    // create
    const createCountry = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("files", country?.files || "no data");
        formData.append('country', country?.country);

        if (country?.country !== "") {
            setError("");
            try {
                const res = await axiosInstance.post("/create-country", formData);
                if (res.data.status === "success") {
                    setCountry({ files: '', country: '' });
                    setData(res.data.message)
                }
            } catch (err) {
                setError(err?.response?.data?.message.errors[0].message)
            }
        }
        else {
            setError("Category is important!")
        }
    }

    const customModal = (item) => {
        editCountry({ ...item, actual: item?.file, processFile: item?.processFile, oldVal: item?.country })
        setShowEditModal(true)
    }


    const deleteThis = async (item) => {
        setIsLoading(true);
        try {
            const rec = await axiosInstance.delete(`/delete-country/${item.id}`)
            if (rec.data.status === "success") {
                setData(rec.data.data);
            }
        }
        catch (err) {
            console.log(err);
        }
        finally {
            isLoading(false);
        }
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
        <section className='max-w-full md:max-w-[calc(100%-350px)] w-full px-5'>
            <div className='flex justify-end my-4'>
                <Link
                    href="/admin/books/create"
                    className="w-[150px] bg-bgSafron rounded shadow-shadowDown text-center py-2 text-white duration-300 hover:shadow-none"
                >
                    Create Book
                </Link>
            </div>

            <section className="flex flex-col w-full max-h-[600px]">
                <section className='max-h-[500px] border relative w-full overflow-x-auto hs overflow-y-auto vs mx-auto'>
                    {
                        isLoading ? <span className='text-2xl font-extrabold'> <IsLoading /> </span> : <table className="text-center w-full mx-auto">
                            <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full">
                                <tr>
                                    <th className="px-2 max-w-[60px]">
                                        Sno.
                                    </th>
                                    <th className="px-2 max-w-[120px]">
                                        Title
                                    </th>
                                    <th className="px-2">
                                        Book
                                    </th>
                                    <th className="px-2">
                                        Chapter
                                    </th>
                                    <th className="px-2 max-w-[200px]">
                                        Sloka
                                    </th>
                                    <th className="px-2 max-w-[200px]">
                                        Hindi
                                    </th>
                                    <th className="px-2 max-w-[200px]">
                                        English
                                    </th>
                                    <th className="px-2 max-w-[200px]">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => {
                                        return (
                                            <tr className="min-h-12 h-12 odd:hover:bg-bgNeel even:hover:bg-bgSafron hover:text-white  odd:bg-slate-50 duration-200" tabIndex={-1} key={index}>
                                                <Td>
                                                    {
                                                        (rowsPerPage * page + index) + 1
                                                    }
                                                </Td>

                                                <Td className="max-w-[120px]">
                                                    <div className='flex flex-start capitalize'>
                                                        {item.title}
                                                    </div>
                                                </Td>

                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item?.subCategory?.subCategory}
                                                    </div>
                                                </Td>

                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item?.chapter}
                                                    </div>
                                                </Td>

                                                <Td>
                                                    <div className='flex flex-start max-w-[200px] line-clamp-1'>
                                                        {
                                                            parse(item?.sloka)
                                                        }
                                                    </div>
                                                </Td>

                                                <Td>
                                                    <span className=" max-w-[200px] line-clamp-1">
                                                        {parse(item?.translationInHindi)}
                                                    </span>
                                                </Td>
                                                <Td>
                                                    <span className=" max-w-[200px] line-clamp-1">
                                                        {parse(item?.translationInEnglish)}
                                                    </span>
                                                </Td>

                                                <Td>
                                                    <section className='flex gap-2 items-center justify-center'>
                                                        <ViewButton onClick={() => {
                                                            setViewData(item);
                                                            setViewModal(true)
                                                        }}>
                                                            <BsEye size={20} />
                                                        </ViewButton>

                                                        <DeleteButton onClick={() => deleteThis(item)}>
                                                            <PiTrashDuotone size={20} />
                                                        </DeleteButton>

                                                        <EditButton href={`./country/${item.id}`} onClick={() => customModal(item)}>
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

                {
                    viewData &&   
                    <CustomModal isModalVisible={viewModal} header={viewData?.title} closeModal={() => setViewModal(false)}>

                    <div className='flex flex-col gap-4'>

                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                Chapter:
                            </section>
                            <section className='col-span-2'>
                                {viewData?.chapter}
                            </section>
                        </div>
                        <hr />
                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                Sub Category:
                            </section>
                            <section className='col-span-2'>
                                {viewData?.subCategory?.subCategory}
                            </section>
                        </div>
                        <hr />

                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                File:
                            </section>
                            <section className='col-span-2'>
                                        <Image src={viewData?.file !== "no file" ? `${viewData?.file}` : "/assets/images/bhagwat_gita/krishna_ji_1.jpg"} height={100} width={100} alt={viewData?.title} />
                            </section>
                        </div>
                        <hr />
                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                Sloka Number:
                            </section>
                            <section className='col-span-2'>
                                {viewData?.slokaNumber}
                            </section>
                        </div>
                        <hr />
                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                Sloka:
                            </section>
                            <section className='col-span-2'>
                                {parse(viewData?.sloka)}
                            </section>
                        </div>
                        <hr />
                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                Hindi:
                            </section>
                            <section className='col-span-2'>
                                {parse(viewData?.translationInHindi)}
                            </section>
                        </div>
                        <hr />
                        <div className='grid grid-cols-3 gap-4'>
                            <section className="text-end font-semibold">
                                English:
                            </section>
                            <section className='col-span-2'>
                                {parse(viewData?.translationInEnglish)}
                            </section>
                        </div>
                    </div>


                </CustomModal>
                }



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