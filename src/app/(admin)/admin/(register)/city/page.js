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

import { TablePagination } from '@mui/material';
// import Error from '@/app/components/Error';


import { MdEditNote } from 'react-icons/md';
import { CustomModal } from '@/app/components/CustomModal';
import CustomSelectDropdown from '@/app/components/CustomSelectDropdown';
import Image from 'next/image';


function Td({ children, className }) {
    return (
        <td className={`font-semibold text-center w-auto px-3 whitespace-nowrap min-w-20 ${className}`}>
            {children}
        </td>
    )
}

function filterData(table, columnName, matchKey) {
    const response = table.filter((item, index) => item[columnName] == matchKey)
    return response;
}


export default function page() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [showEditModal, setShowEditModal] = React.useState(false);
    const [createData, setCreateData] = React.useState();



    const [editedForm, setEditedForm] = React.useState();

    // countries
    const [countries, setCountries] = React.useState();

    // states
    const [states, setStates] = React.useState();

    const [data, setData] = React.useState();
    // fs = filter states
    const [fs, setfs] = React.useState();


    const getAllCities = async () => {
        const allData = await axiosInstance.get("/get-all-cities");
        const countries = await axiosInstance.get("/get-all-countries");
        const state = await axiosInstance.get("/get-all-states");
        setData(allData?.data?.data);
        setCountries(countries?.data?.data);
        setStates(state?.data?.data);
    }

    useEffect(() => {
        getAllCities();
    }, [])

    // getting all sub categories

    // all data
    // pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const chooseCountry = (e) => {
        const fs = filterData(states, "countryId", e);
        setfs(fs);
    }

    const createCity = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("city", createData.city);
        formData.append("stateId", createData.state);
        formData.append("countryId", createData.country);
        formData.append("files", createData.files);
        try {
            const cityCreated = await axiosInstance.post("/create-cities", formData);
            setData(cityCreated.data.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    const editFormSave = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("city", editedForm.city);
        formData.append("stateId", editedForm.state);
        formData.append("countryId", editedForm.country);
        formData.append("files", editedForm.files);
        formData.append("oldFile", editedForm.oldFile);
        formData.append("id", editedForm.id);
        try {
            const cityUpdate = await axiosInstance.put("/update-cities", formData);
            setData(cityUpdate.data.data);
        }
        catch (err) {
            console.log(err);
        }

    }

    const deleteThis = async (e) => {
        try {
            const deleteRec = await axiosInstance.delete(`/delete-city/${e}`);
            setData(deleteRec?.data?.data)
            // console.log("this ", deleteRec?.data?.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (<>
        <section className='w-full px-5'>
            <div className='flex justify-end my-4'>
                <MuiModal header="Create City" modalButton="Create City" buttonCss="rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 px-3 hover:bg-bgSafron" >

                    <form onSubmit={createCity}>
                        {/* <Error error={error} className="text-sm" /> */}
                        <div className='flex flex-col gap-2'>
                            {/* country */}
                            <CustomSelectDropdown
                                title="Country"
                                onChange={(e) => {
                                    chooseCountry(e.target.value);
                                    setCreateData({ ...createData, country: e.target.value })
                                }}
                                value={createData?.country}
                            >
                                {
                                    countries?.map((item, index) =>
                                        <option value={item.id} key={index}> {item.country} </option>
                                    )
                                }
                            </CustomSelectDropdown>

                            {/* state */}
                            <CustomSelectDropdown title="State"
                                onChange={(e) => setCreateData({ ...createData, state: e.target.value })}
                                value={createData?.state}
                            >
                                {
                                    fs?.map((item, index) =>
                                        <option value={item.id} key={index}> {item.state} </option>
                                    )
                                }
                            </CustomSelectDropdown>


                            <LabelInput
                                type='text'
                                label='City'
                                className="py-2"
                                onChange={(e) => setCreateData({ ...createData, city: e.target.value })}
                                value={createData?.city}
                            />


                            <label className="flex flex-col">
                                <span>File</span>
                                <input type="file" className='border-[1px] border-gray-300 py-1 rounded px-2' accept='images/*'
                                onChange={(e) => setCreateData({ ...createData, files: e.target.files[0] })}
                                />
                            </label>

                            {/* <LabelInput
                                type='file'
                                label='File'
                                className="py-2"
                                onChange={(e) =>  setCreateData({ ...createData, files: e.target.files[0] }) }
                            /> */}

                            <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-4">
                                Save
                            </Button>
                        </div>
                    </form>

                </MuiModal>
            </div>

            <section className="flex flex-col w-full max-h-[600px]">
                <section className='max-h-[500px] border relative w-full overflow-x-auto hs overflow-y-auto vs mx-auto'>
                    <table className="text-center w-full mx-auto">
                        <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full capitalize">
                            <tr>
                                <th className="px-2">Sno.</th>
                                <th className="px-2">City</th>
                                <th className="px-2">State</th>
                                <th className="px-2">Country</th>
                                <th className="px-2">File</th>
                                <th className="px-2">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((item, index) => {
                                    return (
                                        <tr key={index} className="border-b-[1px] border-[#80808010] h-14">
                                            <Td>
                                                {
                                                    (rowsPerPage * page + index) + 1
                                                }
                                            </Td>
                                            <Td>
                                                <span className="capitalize"> {item.city} </span>
                                            </Td>
                                            <Td>
                                                <span className="capitalize"> {item.state.state} </span>
                                            </Td>
                                            <Td>
                                                <span className="capitalize"> {item.country.country} </span>
                                            </Td>
                                            <Td>
                                                <div className="mx-auto flex justify-center items-center">
                                                    <Image src={item?.processFile !== 'no file' ? `${item?.processFile}` : "/assets/images/first.jpg"} className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" loading='lazy' />
                                                </div>
                                            </Td>
                                            <Td>
                                                <div className='flex gap-2 justify-center'>
                                                    <EditButton onClick={() => {
                                                        setShowEditModal(true);
                                                        setEditedForm({
                                                            city: item.city,
                                                            state: item.state.id,
                                                            country: item.country.id,
                                                            oldFile: item.processFile,
                                                            id: item.id,
                                                        })
                                                        chooseCountry(item.country.id)
                                                    }}>
                                                        <MdEditNote size={20} />
                                                    </EditButton>

                                                    <DeleteButton onClick={() => deleteThis(item.id)}>
                                                        <PiTrashDuotone size={20} />
                                                    </DeleteButton>
                                                </div>

                                            </Td>
                                        </tr>
                                    )
                                })
                            }






                        </tbody>
                    </table>

                </section>

                <TablePagination
                    className="h-20 z-0"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="section"
                    count={0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </section>
        </section>
        <CustomModal
            isModalVisible={showEditModal}
            closeModal={() => setShowEditModal(false)}
            header="Edit Modal"
        >
            <form className='flex flex-col gap-3' onSubmit={editFormSave}>
                <CustomSelectDropdown
                    onChange={(e) => {
                        chooseCountry(e.target.value);
                        setEditedForm({ ...editedForm, country: e.target.value })
                    }}
                    title="Country"
                    value={ editedForm?.country }
                >
                    {
                        countries?.map((item, index) =>
                            <option value={item.id} key={index}> {item.country} </option>
                        )
                    }

                </CustomSelectDropdown>

                {/* state */}
                <CustomSelectDropdown
                    onChange={(e) => setEditedForm({ ...editedForm, state: e.target.value })}
                    title="State"
                    value={editedForm?.state }
                >
                    {
                        fs?.map((item, index) =>
                            <option value={item.id} key={index}> {item.state} </option>
                        )
                    }
                </CustomSelectDropdown>

                <LabelInputEdit
                    type="text"
                    label="City"
                    value={editedForm?.city}
                    onChange={(e) => setEditedForm({ ...editedForm, city: e.target.value })}
                />

                <InputFile
                    onChange={(e) => setEditedForm({ ...editedForm, files: e.target.files[0] })}
                />

                <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-4">
                    Save
                </Button>
            </form>




        </CustomModal>
    </>

    );
}