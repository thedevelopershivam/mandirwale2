"use client";
import * as React from 'react';

import MuiModal from '@/app/components/MuiModal';
import LabelInput from "@/app/components/form/LabeInput";
import InputFile from "@/app/components/form/InputFile";
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
            const data = await axiosInstance.get("/get-all-countries")
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
        try{
            const rec = await axiosInstance.delete(`/delete-country/${item.id}`)
            if(rec.data.status === "success"){
                setData(rec.data.res);
            }
        }
        catch(err){
            console.log(err);
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
        <section className='w-full px-5'>
            <div className='flex justify-end my-4'>
                <MuiModal header="Create Country" modalButton="Create Country" buttonCss="rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 px-3 hover:bg-bgSafron" >

                    <form onSubmit={createCountry}>
                        <Error error={error} className="text-sm" />
                        <div className='flex flex-col gap-2'>

                            <LabelInput
                                type='text'
                                label='Country Name'
                                className="py-2"
                                onChange={(e) => setCountry({ ...country, country: e.target.value })}
                                error={error}
                                errorMsg={errorMsg}
                                value={country.country}
                            />

                            <InputFile
                                label='Flag SVG'
                                className="py-2"
                                onChange={(e) => setCountry({ ...country, files: e.target.files[0] })}
                                error={error && error}
                            />

                            <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-4">
                                Save
                            </Button>

                        </div>
                    </form>

                </MuiModal>
            </div>

            <section className="flex flex-col w-full max-h-[600px]">
                <section className='max-h-[500px] border relative w-full overflow-x-auto hs overflow-y-auto vs mx-auto'>
                    {
                        isLoading ? <span className='text-2xl font-extrabold'> loading... </span> : <table className="text-center w-full mx-auto">
                            <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full">
                                <tr>
                                    <th className="px-2">Sno.</th>
                                    <th className="px-2">Country</th>
                                    <th className="px-2">File</th>
                                    <th className="px-2">Action</th>
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

                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item.country}
                                                    </div>
                                                </Td>

                                                <Td>
                                                    <div className="mx-auto flex justify-center items-center">
                                                        <Image src={item.file !== 'no file' ? `${item.file}` : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                    </div>
                                                </Td>
                                                
                                                <Td>
                                                    <section className='flex gap-2 items-center justify-center'>
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