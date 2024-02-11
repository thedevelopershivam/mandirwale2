"use client";

import * as React from 'react';
import axios from 'axios';
import MuiModal from '@/app/components/MuiModal';
import LabelInput from "@/app/components/form/LabeInput";
import Button from '@/app/components/Button';
import { useState } from 'react';


function Td({ children }) {
    return (
        <td className="font-semibold text-center w-auto px-3 whitespace-nowrap min-w-20">
            {children}
        </td>
    )
}

export default function page() {
    const [page, setPage] = useState(0);
    const [categoryData, setCategoryData] = useState({});
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState();
    const [data, setData] = React.useState();


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const createCategory = async (e) => {
        console.log(categoryData)
        e.preventDefault();
        const formData = new FormData();
        formData.append("files", categoryData?.files || "no data");
        formData.append('category', categoryData?.category);

        try {
            const res = await axios.post("/api/users/admin/category", categoryData);

            if (res.data.status === "success") {
                setData(res.data.message.message)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className='w-full px-5'>
            <div className='flex justify-end my-4'>
                <MuiModal header="Create category">
                    <form onSubmit={createCategory}>
                        <div className='flex flex-col gap-2'>
                            <LabelInput
                                type='text'
                                label='Category Name'
                                className="py-2"
                                onChange={(e) => setCategoryData({ ...categoryData, category: e.target.value })}
                                error={error}
                                errorMsg={errorMsg}
                            />
                            <LabelInput
                                type='file'
                                label='File'
                                className="py-2"
                                onChange={(e) => setCategoryData({ ...categoryData, files: e.target.files[0] })}
                                error={error && error}
                            />
                            <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-2">
                                Save
                            </Button>
                        </div>
                    </form>

                </MuiModal>
            </div>

            <section className="flex flex-col w-full max-h-[450px]">
                <section className='max-h-[450px] border relative w-full overflow-x-auto hs overflow-y-auto vs mx-auto'>
                    <table className="text-center w-full mx-auto">
                        <thead className="h-12 bg-bgNeel text-textWhite sticky top-0 w-full">
                            <tr>
                                <th className="px-2">Sno.</th>
                                <th className="px-2">File</th>
                                <th className="px-2">Name</th>
                                <th className="px-2">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    return (
                                        <tr className="min-h-12 h-12 odd:hover:bg-bgNeel even:hover:bg-bgSafron hover:text-white  odd:bg-slate-50 duration-200" tabIndex={-1} key={row.code}>
                                            <Td>
                                                {
                                                    (rowsPerPage * page + index) + 1
                                                }
                                            </Td>
                                            <Td>
                                                <div className="mx-auto flex justify-center items-center">
                                                    <Image src="/assets/images/first.jpg" className='w-10 h-10 rounded-full' width={60} height={60} alt="photo title" />
                                                </div>
                                            </Td>
                                            <Td> <div className='flex flex-start'>{row.name}</div>  </Td>
                                            <Td>
                                                <section className='flex gap-2 items-center justify-center'>
                                                    <ActionButton className="hover:bg-bgWhite hover:text-textDanger bg-butDanger">
                                                        <PiTrashDuotone size={20} />
                                                    </ActionButton>
                                                    <ActionButton className="hover:bg-bgWhite hover:text-textSuccess bg-butSuccess">
                                                        <MdEditNote size={20} />
                                                    </ActionButton>
                                                </section>
                                            </Td>

                                        </tr>
                                    );
                                })} */}
                        </tbody>
                    </table>
                </section>
                {/* <TablePagination
                    className="absolute bottom-0 right-0"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
            </section>
        </section>

    );
}