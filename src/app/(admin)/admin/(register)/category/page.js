"use client";

import * as React from 'react';

import MuiModal from '@/app/components/MuiModal';
import LabelInput from "@/app/components/form/LabeInput";
import InputFile from "@/app/components/form/InputFile";
import LabelInputEdit from "@/app/components/form/LabelInputEdit";
import Button from '@/app/components/Button';
import { useState, useEffect } from 'react';

import axiosInstance from '@/app/util/axios';
import { DeleteButton, EditButton } from '@/app/components/admin/ActionButtons';
import { PiTrashDuotone } from 'react-icons/pi';

import Image from 'next/image';
import { TablePagination } from '@mui/material';
// import Error from '@/app/components/Error';


import { MdEditNote } from 'react-icons/md';
import { CustomModal } from '@/app/components/CustomModal';
import CustomSelectDropdown from '@/app/components/CustomSelectDropdown';


function Td({ children, className }) {
    return (
        <td className={`font-semibold text-center w-auto px-3 whitespace-nowrap min-w-20 ${className}`}>
            {children}
        </td>
    )
}

export default function page() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [categoryData, setCategoryData] = useState({});
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState();

    const [data, setData] = React.useState();

    const [category, setCategory] = React.useState();

    const [isLoading, setIsLoading] = React.useState(false);
    const [subCatData, setSubCatData] = React.useState({});

    // edited data
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [editCategory, setEditCategory] = React.useState();
    const [editSubCategory, setEditSubCategory] = React.useState();
    const [editFile, setEditFile] = React.useState();
    const [oldFiles, setOldFiles] = React.useState();

    // getting all data
    async function getAllCategories() {
        setIsLoading(true);
        try {
            const data = await axiosInstance.get("/get-categories")
            const subCat = await axiosInstance.get("/get-all-sub-categories")

            setData(subCat?.data?.data);
            setCategory(data?.data?.data);
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsLoading(false);
        }
    }

    // getting all sub categories

    // all data
    useEffect(() => {
        getAllCategories();
    }, [])

    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // pagination

    // creating category
    const createSubCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("files", subCatData?.file || "no data");
        formData.append('subCategory', subCatData.subCategory);
        formData.append('categoryId', subCatData.categoryId);


        if (subCatData?.subCategory !== "" || subCatData?.categoryId !== '') {
            setError("");
            try {
                const rec = await axiosInstance.post("/create-sub-category", formData);
                setData(rec?.data?.data);
            } catch (err) {
                setError(err?.response?.data?.message.errors[0].message)
            }
        }
        else {
            setError("Category is important!")
        }

    }

    // delete category
    const deleteThis = async (item) => {

        try {
            const rec = await axiosInstance.delete(`/delete-sub-category/${item.id}`)
            if (rec.data.status === "success") {
                setData(rec.data.res);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    // edit record
    const editModal = async (e) => {
        e.preventDefault();

        const userFormData = new FormData();
        userFormData.append('files', editFile || "no file");
        userFormData.append('subCategory', editSubCategory);
        userFormData.append('categoryId', editCategory);
        userFormData.append("oldFile", oldFiles.oldFile)
        userFormData.append("subCatId", oldFiles.subCatId)
        userFormData.append("oldProcess", oldFiles.oldProcess);

        console.table({ editSubCategory, editCategory, oldFiles })

        try {
            const update = await axiosInstance.post("/update-sub-category", userFormData);
            console.log(update?.data?.data);
            setData(update?.data?.data);
        }
        catch (err) {
            console.log(err)
        }

    }




    return (<>
        <section className='w-full px-5'>
            <div className='flex justify-end my-4'>
                <MuiModal header="Create Category" modalButton="Create Category" buttonCss="rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 px-3 hover:bg-bgSafron" >

                    <form onSubmit={createSubCategory}>
                        {/* <Error error={error} className="text-sm" /> */}
                        <div className='flex flex-col gap-2'>

                            <CustomSelectDropdown
                                onChange={(e) => setSubCatData({ ...subCatData, categoryId: e.target.value })}
                                value={subCatData?.categoryId}

                            >
                                {
                                    category?.map((item, index) =>
                                        <option className="min-h-14" value={item.id} key={index}>
                                            {item.category}
                                        </option>
                                    )
                                }
                            </CustomSelectDropdown>

                            <LabelInput
                                type='text'
                                label='Category Name'
                                className="py-2"
                                onChange={(e) => setSubCatData({ ...subCatData, subCategory: e.target.value })}
                                value={subCatData?.subCategory}
                            />

                            <label className="flex flex-col">
                                <span>File</span>
                                <input type="file" className="py-1 rounded border-[1px] border-gray-300" onChange={(e) => setSubCatData({ ...subCatData, file: e.target.files[0] })} />
                            </label>

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
                            <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full capitalize">
                                <tr>
                                    <th className="px-2">Sno.</th>
                                    <th className="px-2">category</th>
                                    <th className="px-2">Sub File</th>
                                    <th className="px-2">category</th>
                                    <th className="px-2">File</th>
                                    <th className="px-2">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item, index) => {
                                        return (
                                            <tr className="min-h-12 h-12 odd:hover:bg-bgSafron even:hover:bg-bgNeel hover:text-white odd:bg-slate-50 duration-200" tabIndex={-1} key={index}>
                                                <Td>
                                                    {
                                                        (rowsPerPage * page + index) + 1
                                                    }
                                                </Td>
                                                <Td>
                                                    <div className='flex flex-start capitalize'>
                                                        {item.subCategory}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className="mx-auto flex justify-center items-center">
                                                        {console.log(item.file)}
                                                        <Image src={item.file !== 'no file' ? item.file : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <span className='capitalize'>
                                                        {item.category.category}
                                                    </span>
                                                </Td>
                                                <Td>
                                                    <div className="mx-auto flex justify-center items-center">
                                                        <Image src={item.category.processFile !== 'no file' ? `${item.category.processFile}` : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                    </div>
                                                </Td>

                                                <Td>
                                                    <section className='flex gap-2 items-center justify-center'>
                                                        <DeleteButton onClick={() => deleteThis(item)}>
                                                            <PiTrashDuotone size={20} />
                                                        </DeleteButton>

                                                        <EditButton onClick={() => {
                                                            setEditCategory(item.categoryId)
                                                            setEditSubCategory(item.subCategory)
                                                            setOldFiles({
                                                                ...oldFiles,
                                                                oldProcess: item.processFile,
                                                                oldFile: item.file,
                                                                subCatId: item.id
                                                            })
                                                            setShowEditModal(true)
                                                        }}>
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
        <CustomModal
            isModalVisible={showEditModal}
            onClick={() => {
                setShowEditModal(true)
            }}
            closeModal={() => setShowEditModal(false)}
            header="Edit Modal"
        >
            <form className='flex flex-col gap-3' onSubmit={editModal}>

                <CustomSelectDropdown onChange={(e) => setEditCategory(e.target.value)} value={editCategory || null} >
                    {
                        category?.map((item, index) =>
                            <option className="min-h-14" value={item.id} key={index}>
                                {item.category}
                            </option>
                        )
                    }
                </CustomSelectDropdown>

                <LabelInputEdit type="text" label="Category" onChange={(e) => setEditSubCategory(e.target.value)} value={editSubCategory} />




                <InputFile type="file" label="File" className="py-2"
                    onChange={(e) => setEditFile(e.target.files[0])} />

                <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-4">
                    Save
                </Button>

            </form>




        </CustomModal>
    </>

    );
}