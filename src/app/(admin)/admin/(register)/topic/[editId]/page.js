"use client"
import Button from "@/app/components/Button";

import LabelInput from '@/app/components/form/LabeInput';
import axiosInstance from '@/app/util/axios';
import { useRouter } from 'next/navigation'


import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";


function page() {
    const router = useRouter()
    const [editableData, setEditableData] = useState({});
    const [categoryData, setCategoryData] = useState("");
    const [fileData, setFileData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [recordNotFound, setRecordNotFound] = useState(false);
    const { editId } = new useParams();


    const isInteger = Number.isInteger(Number(editId));



    async function getUserData() {
        try {
            await axiosInstance.get(`/get-a-user-details/${editId}`)
                .then((res) => {
                    if (!res.data) {
                        setRecordNotFound(true)
                    }
                    else {
                        setCategoryData(res.data.data.category);
                        setEditableData(res.data.data);
                    }
                })
                .catch((err) => console.log(err))
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUserData();
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (fileData) {
            formData.append("files", fileData);
        }
        formData.append("category", categoryData);
        formData.append("productId", editableData.id);
        formData.append("oldFile", editableData.file);
        formData.append("oldProcess", editableData.processFile);

        try {
            const updateQuery = await axiosInstance.post("/update-category", formData, {
                headers: {
                    "Content-Type": 'multipart/ form-data',
                }
            });
            if (updateQuery.data.status) {
                router.push("../topic");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (


        <div className={`w-full max-h-[210px] rounded shadow-lg p-3 m-[2vw] bg-white`}>
            {!isInteger || recordNotFound ? <span> This is not valid product id! </span> :
                <form className="flex flex-col gap-3" onSubmit={submitHandler}>
                    <label className="flex flex-col">
                        <span> Topic </span>
                        <input
                            type="text"
                            className={` py-2 px-2 w-full rounded focus:outline-none border-[1px]`}
                            value={categoryData}
                            onChange={(e) => setCategoryData(e.target.value)} />
                    </label>


                    <label className="flex flex-col">
                        <span> File </span>
                        <input type="file"
                            className="py-1 px-2 border-[1px] border-gray-200 rounded"
                            onChange={(e) => setFileData(e.target.files[0])}
                        />
                    </label>


                    <Button type="Submit" isLoading={isLoading}> Submit </Button>
                </form>

            }

        </div>
    )
}

export default page