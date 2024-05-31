"use client";

import * as React from 'react';

import MuiModal from '@/app/components/MuiModal';
import LabelInput from "@/app/components/form/LabeInput";
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
    const [subCategoryData, setSubCategoryData] = useState();
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState();
    const [data, setData] = React.useState();
    const [editTopic, setEditTopic] = React.useState();

    const [fsc, setFsc] = React.useState();

    const [category, setCategory] = React.useState();

    const [isLoading, setIsLoading] = React.useState(false);
    const [subCatData, setSubCatData] = React.useState({});

    // edited data
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [editedData, setEditedData] = React.useState(false);






    // getting all data
    async function getAllCategories() {
        setIsLoading(true);
        try {
            const data = await axiosInstance.get("/get-all-lower-categories")
            const subCat = await axiosInstance.get("/get-all-sub-categories")
            const category = await axiosInstance.get("/get-categories")

            setData(data?.data?.data);
            setCategory(category?.data?.data);
            setSubCategoryData(subCat?.data?.data);
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

    // creating sub category
    const createSubCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('subCategoryId', subCatData.subCategoryId);
        formData.append('categoryId', subCatData.categoryId);
        formData.append('lowerCategory', subCatData.lowerCategory);
        formData.append("files", subCatData?.file || "no data");


        if (subCatData?.lowerCategory !== "" || subCatData?.categoryId !== '' || subCatData?.subCategoryId !== '') {
            setError("");
            try {
                console.log("formData");
                console.log({ formData });
                const rec = await axiosInstance.post("/create-lower-category", formData);
                setData(rec?.data?.data);
            } catch (err) {
                setError(err?.response?.data?.message.errors[0].message)
            }
        }
        else {
            setError("Sub Category is important!")
        }

    }

    // edit record
    const editModal = async (e) => {
        e.preventDefault();

        console.log("first this ")
        const userFormData = new FormData();
        userFormData.append('files', editTopic?.files || "no file");
        userFormData.append('subCategoryId', editTopic?.subCategoryId);
        userFormData.append('categoryId', editTopic?.categoryId);
        userFormData.append("oldFile", editTopic?.compress)
        userFormData.append("file", editTopic?.file)
        userFormData.append("lowerCategory", editTopic?.lowerCategory)
        userFormData.append("id", editTopic?.id)

        try {
            const update = await axiosInstance.put("/update-lower-category", userFormData);
            setData(update?.data?.data);
        }
        catch (err) {
            console.log(err)
        }

    }

    // delete sub category
    const deleteThis = async (item) => {
        try {
            const rec = await axiosInstance.delete(`/delete-lower-category/${item.id}`)
            if (rec.data.status === "success") {
                setData(rec?.data?.res);
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    const selectTopic = (e, f) => {
        const sc = subCategoryData.filter((item) => item.categoryId == e);
        if (!f) {
            setSubCatData({ ...subCatData, categoryId: e });
        }
        setFsc(sc);
    }



    return (<>
        <section className='w-full px-5'>
            <div className='flex justify-end my-4'>
                <MuiModal header="Create Sub-Category" modalButton="Create Sub-Category" buttonCss="rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 px-3 hover:bg-bgSafron" >

                    <form onSubmit={createSubCategory}>
                        {/* <Error error={error} className="text-sm" /> */}
                        <div className='flex flex-col gap-2'>

                            <CustomSelectDropdown
                                onChange={(e) => selectTopic(e.target.value)}
                                value={subCatData?.categoryId}
                                title="Topic">
                                {
                                    category?.map((item, index) =>
                                        <option className="min-h-14" value={item.id} key={index}>
                                            {item.category}
                                        </option>
                                    )
                                }
                            </CustomSelectDropdown>

                            <CustomSelectDropdown onChange={(e) => {
                                setSubCatData({ ...subCatData, subCategoryId: e.target.value })
                            }}
                                value={subCatData?.subCategoryId}
                                title="Category">
                                {
                                    fsc?.map((item, index) =>
                                        <option className="min-h-14" value={item.id} key={index}>
                                            {item.subCategory}
                                        </option>
                                    )
                                }
                            </CustomSelectDropdown>

                            <LabelInput
                                type='text'
                                label='Sub Category'
                                className="py-2"
                                onChange={(e) => setSubCatData({ ...subCatData, lowerCategory: e.target.value })}
                                value={subCatData?.lowerCategory}
                            />

                            <label className='flex flex-col'>
                                <span> File </span>
                                <input type="file" className="rounded border-[1px] border-gray-300 px-2 py-1" onChange={(e) => setSubCatData({ ...subCatData, file: e.target.files[0] })}/>
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
                                    <th className="px-2">Sub Category</th>
                                    <th className="px-2">File</th>
                                    <th className="px-2">Topic</th>
                                    <th className="px-2">Sub Category</th>
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
                                                        {item.lowerCategory}
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <div className="mx-auto flex justify-center items-center">
                                                        <Image src={item.file !== 'no file' ? `${item.compress}` : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                    </div>
                                                </Td>
                                                <Td>
                                                    <span className='capitalize'>
                                                        {item.category.category}
                                                    </span>
                                                </Td>
                                                <Td>
                                                    <span className='capitalize'>
                                                        {item.subCategory.subCategory}
                                                    </span>
                                                </Td>

                                                <Td>
                                                    <section className='flex gap-2 items-center justify-center'>
                                                        <DeleteButton onClick={() => deleteThis(item)}>
                                                            <PiTrashDuotone size={20} />
                                                        </DeleteButton>

                                                        <EditButton onClick={() => {
                                                            selectTopic(item?.categoryId)
                                                            setEditTopic(item)
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
                <CustomSelectDropdown
                    onChange={(e) => {
                        selectTopic(e.target.value);
                        setEditTopic({ ...editTopic, categoryId: e.target.value })
                    }}
                    attr={{ value: editTopic?.categoryId }}>
                    {
                        category?.map((item, index) =>
                            <option className="min-h-14" value={item.id} key={index}>
                                {item.category}
                            </option>
                        )
                    }
                </CustomSelectDropdown>

                <CustomSelectDropdown onChange={(e) => setEditTopic({ ...editTopic, subCategoryId: e.target.value })} attr={{ value: editTopic?.subCategoryId }}>
                    {
                        fsc?.map((item, index) =>
                            <option className="min-h-14" value={item.id} key={index}>
                                {item.subCategory}
                            </option>
                        )
                    }
                </CustomSelectDropdown>

                <LabelInputEdit
                    type="text"
                    label="Sub Category"
                    onChange={(e) => setEditTopic({ ...editTopic, lowerCategory: e.target.value })}
                    value={editTopic?.lowerCategory}
                />

                <LabelInput
                    type="file"
                    label="File"
                    className="py-2"
                    onChange={(e) => setEditTopic({ ...editTopic, files: e.target.files[0] })}
                />

                <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-4">
                    Save
                </Button>

            </form>




        </CustomModal>
    </>

    );
}