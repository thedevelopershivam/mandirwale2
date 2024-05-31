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
    const [countryData, setCountryData] = useState("");
    const [fileData, setFileData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [recordNotFound, setRecordNotFound] = useState(false);
    const { editId } = new useParams();

    const isInteger = Number.isInteger(Number(editId));

    async function getUserData() {
        try {
            await axiosInstance.get(`/get-a-country-details/${editId}`)
                .then((res) => {
                    if (!res.data) {
                        setRecordNotFound(true)
                    }
                    else {
                        setCountryData(res.data.data.country);
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

        formData.append("country", countryData);
        formData.append("productId", editableData.id);
        formData.append("oldFile", editableData.file);
        formData.append("oldProcess", editableData.processFile);
        try {
            const updateQuery = await axiosInstance.put("/update-country", formData);

            if (updateQuery.data.status === "success") {
                router.push("../country");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`w-full max-h-[210px] rounded shadow-lg p-3 m-[2vw] bg-white`}>
            {!isInteger || recordNotFound ? <span> This is not valid product id! </span> :
                <form className="flex flex-col gap-3" onSubmit={submitHandler}>
                    <input
                        type="text"
                        className={` py-1 px-2 w-full rounded focus:outline-none border-[1px]`}
                        value={countryData}
                        onChange={(e) => setCountryData(e.target.value)} />

                    <LabelInput
                        label="file"
                        type="file"
                        onChange={(e) => setFileData(e.target.files[0])}
                    />
                    <Button type="Submit" isLoading={isLoading}> Submit </Button>
                </form>

            }

        </div>
    )
}

export default page