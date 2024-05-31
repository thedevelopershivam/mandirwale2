"use client";

import LabelInput from '@/app/components/form/LabeInput';
import axiosInstance from '@/app/util/axios';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import CustomSelectDropdown from './../../../../../components/CustomSelectDropdown';
import LabeInput from '@/app/components/form/LabeInput';
import TextEditor from '@/app/components/TextEditor';
import Button from '@/app/components/Button';

function create() {
    const router = new useRouter();
    const [data, setData] = useState();
    const [formData, setFormData] = useState();
    const [error, setError] = useState();

    async function getSubCategory() {
        const data = await axiosInstance.get("/get-all-sub-categories");
        setData(data.data.data);
    }

    useEffect(() => {
        getSubCategory();
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault();

        const userData = new FormData();

        userData.append("subCategoryId", formData?.subCategoryId);
        userData.append("title", formData?.title);
        userData.append("chapter", formData?.chapterNumber);
        userData.append("slokaNumber", formData?.slokaNumber);
        userData.append("sloka", formData?.sloka);
        userData.append("hindi", formData?.hindi);
        userData.append("english", formData?.english);
        userData.append("files", formData?.file || "no file");


        const saveRecord = await axiosInstance.post("/create-book", userData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => res.status === 200 ? router.push("/admin/books") : console.log(res.status))
            .catch(err => console.log(err));
    }


    console.log(formData)

    return <section className='w-full px-5 my-5'>
        <form onSubmit={onSubmit}>

            <div className='bg-white shadow-shadowDownL p-5 rounded-md flex flex-col gap-5'>
                <section className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <CustomSelectDropdown
                        className="w-full px-2"
                        title='Sub Catgeory'
                        value={formData?.subCategoryId}
                        onChange={(e) => setFormData({ ...formData, subCategoryId: e.target.value })}
                    >
                        {
                            data && data?.map((item, index) =>
                                <option value={item.id} key={index}>
                                    {item.subCategory}
                                </option>
                            )
                        }
                    </CustomSelectDropdown>
                    <LabeInput className="w-full" type='text' label="title" placeholder="title"
                        value={formData?.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </section>

                <section className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <label className='flex flex-col'>
                        <span>
                            File
                            <span className='text-red-500 text-xs'>
                                (not mandatory)
                            </span>
                        </span>
                        <input
                            type="file"
                            className='p-1 rounded w-full border-[1px] border-gray-300 '
                            onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })
                            }

                        />
                    </label>

                    {/* <LabeInput
                        type='file'
                        label="Choose Related File"
                        onChange={(e) => setFormData({
                            ...formData,
                            file: e.target.files[0]
                        })}
                        value={formData?.file}
                    /> */}

                    <LabeInput type='Number' label="Chapter Number" value={formData?.chapterNumber}
                        onChange={(e) => setFormData({
                            ...formData,
                            chapterNumber: e.target.value
                        })} />

                    <LabeInput type='number' label="Sloka Number" value={formData?.slokaNumber}

                        onChange={(e) => setFormData({
                            ...formData,
                            slokaNumber: e.target.value
                        })} />
                </section>


                <label className='flex flex-col'>
                    <span> Sloka </span>
                    <TextEditor value={formData?.sloka} onChange={(e) => setFormData({
                        ...formData,
                        sloka: e
                    })} />
                </label>

                <label className='flex flex-col'>
                    <span> Translation In Hindi </span>
                    <TextEditor value={formData?.hindi} onChange={(e) => setFormData({
                        ...formData,
                        hindi: e
                    })} />
                </label>

                <label className='flex flex-col'>
                    <span> Translation In English </span>
                    <TextEditor value={formData?.english} onChange={(e) => setFormData({
                        ...formData,
                        english: e
                    })} />
                </label>



                <Button type="submit">
                    Submit
                </Button>

                {/* <LabelInput type="text" label="Username" placeholder="username" /> */}
            </div>
        </form>

    </section>
}

export default create;