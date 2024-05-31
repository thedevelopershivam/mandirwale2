"use client";
import axiosInstance from '@/app/util/axios';
import TextEditor from '@/app/components/TextEditor'
import React, { useEffect, useState } from 'react'
import LabelInput from '@/app/components/form/LabeInput';
import CustomSelectDropdown from '@/app/components/CustomSelectDropdown';
import Button from '@/app/components/Button';

function page() {
    const [editorContent, setEditorContent] = useState();
    const [isAddressNeeded, setIsAddressNeeded] = useState(false);
    const [filterData, setFilterData] = useState();
    const [data, setData] = useState();
    const [multipleFile, setMultipleFile] = useState(true);
    const [formData, setFormData] = useState({
        isAddressNeeded: false
    });
    const [files, setFiles] = useState();

    async function getData() {
        try {
            const data = await axiosInstance.get("/all-record");
            setData(data?.data?.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const changeTopic = (e) => {
        setFormData({ value: formData?.category, required: true })
        const text = e.target.options[e.target.selectedIndex].text;

        if (text.toLowerCase() === "temples" || text.toLowerCase() === "temple") {
            setIsAddressNeeded(true)
        }
        else {
            setIsAddressNeeded(false)
        }

        if (text.toLowerCase() === "book" || text.toLowerCase() === "books") {
            setMultipleFile(false)
        }
        else {
            setMultipleFile(true)
        }
    }

    const filterFunction = (table, column, value) => {
        return table.filter((item) => Number(item[column]) === Number(value))
    }

    // On Submit -- Creating This Form
    const onSubmit = async (e) => {

        e.preventDefault();
        const userFormData = new FormData();
        
        if(formData?.category && formData?.subCategory && formData?.lowerCategory && formData?.title && formData?.messageInEnglish && formData?.messageInHindi && formData?.metaTags?.title && formData?.metaTags?.description && formData?.metaTags?.keywords)
        {
            try {
                if (isAddressNeeded) {
                    userFormData.append("city", formData?.address?.city);
                    userFormData.append("state", formData?.address?.state);
                    userFormData.append("country", formData?.address?.country);
                    userFormData.append("address", formData?.address?.address);
                    userFormData.append("pincode", formData?.address?.pincode);
                    userFormData.append("map", formData?.address?.mapLocation);
                }
    
                userFormData.append("isAddressNeeded", isAddressNeeded);
                userFormData.append("categoryId", formData?.category);
                userFormData.append("subCategoryId", formData?.subCategory);
                userFormData.append("lowerCategory", formData?.lowerCategory);
                userFormData.append("title", formData?.title);
    
                userFormData.append("messageInEnglish", formData?.messageInEnglish);
                userFormData.append("messageInHindi", formData?.messageInHindi);
                userFormData.append("metaTitle", formData?.metaTags?.title);
                userFormData.append("metaDes", formData?.metaTags?.description);
                userFormData.append("metaKeywords", formData?.metaTags?.keywords);
    
                    
                if (files?.length > 1)
                {
                    for(let i = 0; i <= files?.length; i++){
                        userFormData.append("files", files[i]);
                    }
                }
                else{
                    userFormData.append("files", files);
                }
                
                
                const saveData = await axiosInstance.post("/create-record", userFormData, {
                    headers: {
                        "Content-Type": 'multipart/form-data; boundary=<calculated when request is sent>'
                    }
                });
                if (saveData?.data?.status === "success")
                {
                    
                    setFormData(null);
                }
    
            }
            catch (err) {
                console.log(err)
            }
        }else{
            alert("all fields are mendatory")
        }

       
    }

    // change file -- saving file 
    const changeFile = (e) => {
        if (e.target.files?.length <= 5)
        {
            setFiles(e.target.files)
        }
        else
        {
            alert("you have reached number of limits! only first 5 files will be selected!")
        }
    }

    return (<div className="w-full">
        <form onSubmit={onSubmit}>
            {/* about post */}
            <div className="flex flex-col shadow-lg p-5 m-5">
                <span className="font-semibold text-xl text-textPrimary mb-3">
                    Post About
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CustomSelectDropdown
                        className="w-full"
                        title="Topic" onChange={(e) => {
                            changeTopic(e);
                            setFilterData({
                                ...filterData,
                                filterSubCategory: null,
                                filterCategory: filterFunction(data?.category, "categoryId", e.target.value)
                            })
                            setFormData({ ...formData, category: e.target.value })
                        }}
                        
                        value={formData?.category}
                        
                    >
                        {
                            data?.topic &&
                            data?.topic.map((item, index) => <option value={item.id} key={index}>
                                {item.category}
                            </option>)
                        }
                    </CustomSelectDropdown>

                    <CustomSelectDropdown
                        className="w-full"
                        title="Category" onChange={(e) => {
                            setFilterData(
                                {
                                    ...filterData,
                                    filterSubCategory:
                                        filterFunction(data?.subCategory, "subCategoryId", e.target.value)
                                });
                            setFormData({ ...formData, subCategory: e.target.value })

                        }}
                        value={formData?.subCategory}
                        >
                        {
                            filterData?.filterCategory &&
                            filterData?.filterCategory.map((item, index) => <option value={item.id} key={index}>
                                {item.subCategory}
                            </option>)
                        }
                    </CustomSelectDropdown>
                    <CustomSelectDropdown
                        className="w-full"
                        title="Sub Category"
                        onChange={(e) => setFormData({ ...formData, lowerCategory: e.target.value })}
                        value={formData?.lowerCategory}
                        >
                        {
                            filterData?.filterSubCategory &&
                            filterData?.filterSubCategory.map((item, index) => <option value={item.id} key={index}>
                                {item.lowerCategory}
                            </option>)
                        }
                    </CustomSelectDropdown>
                </div>
            </div>

            {/* address sector */}
            {
                isAddressNeeded &&
                <div className="flex flex-col shadow-lg p-5 m-5">
                    <span className="font-semibold text-xl text-textPrimary mb-3"> Address </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <CustomSelectDropdown
                            className="w-full"
                            title="Country"
                            onChange={(e) => {
                                setFilterData({
                                    ...filterData,
                                    filterCity: null,
                                    filterState: filterFunction(data?.state, "countryId", e.target.value)
                                })
                                setFormData({ ...formData, address: { ...formData?.address, country: e.target.value } })
                            }}
                            value={formData?.address?.country}
                        >
                            {
                                data?.country.map((item, index) =>
                                    <option value={item.id} key={index}>
                                        {item.country}
                                    </option>
                                )

                            }
                        </CustomSelectDropdown>

                        <CustomSelectDropdown
                            className="w-full"
                            title="State"
                            onChange={(e) => {
                                setFilterData({ ...filterData, filterCity: filterFunction(data?.city, "stateId", e.target.value) });
                                setFormData({ ...formData, address: { ...formData?.address, state: e.target.value } })
                            }}
                            value={formData?.address?.state}
                        >
                            {
                                filterData?.filterState?.map((item, index) => <option value={item.id} key={index}>
                                    {item.state}
                                </option>)
                            }
                        </CustomSelectDropdown>

                        <CustomSelectDropdown
                            className="w-full"
                            title="City"
                            onChange={(e) => setFormData({ ...formData, address: { ...formData?.address, city: e.target.value } })}
                            value={formData?.address?.city}
                                attr={{required:true}}
                        >
                            {
                                filterData?.filterCity?.map((item, index) =>
                                    <option value={item.id} key={index}>
                                        {item.city}
                                    </option>
                                )
                            }
                        </CustomSelectDropdown>

                        <LabelInput
                            type="text"
                            className="w-full"
                            label="Address"
                            onChange={(e) => setFormData({ ...formData, address: { ...formData?.address, address: e.target.value } })}
                            value={formData?.address?.address}
                            required={true}
                        />

                        <LabelInput
                            type="number"
                                className={`w-full ${formData?.address?.pincode?.length < 6 && 'invalid:border-red-500'}` }
                            label="Pincode"
                            onChange={(e) => setFormData({ ...formData, address: { ...formData?.address, pincode: e.target.value } })}
                            value={formData?.address?.pincode}
                            required={true}
                        />

                        <LabelInput
                            type="text"
                            className="w-full"
                            label="Map Position Embeded"
                            onChange={(e) => setFormData({ ...formData, address: { ...formData?.address, mapLocation: e.target.value } })}
                            value={formData?.address?.mapLocation}
                            required={true}
                        />
                    </div>
                </div>
            }
            {/* texteditor */}
            <div className="flex flex-col shadow-lg p-5 m-5 gap-4">
                <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                        File
                        {
                            multipleFile && <span className=" text-textDanger text-sm mx-2">
                                (upto 5)
                            </span>
                        }
                        
                    </span>

                    <label className='flex flex-col'>
                        <span>Files</span>
                        <input
                            type='file'
                            className='h-16'
                            multiple={multipleFile}
                            onChange={(e) => changeFile(e)}
                            required={true}
                        />
                    </label>

                    
                </div>
            </div>
            <div className="flex flex-col shadow-lg p-5 m-5 gap-4">

                <LabelInput label="title" placeholder='this post is dedicated too whom!' value={formData?.title} 
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        title: e.target.value
                    })
                }
                />

                <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                        Message In English
                    </span>

                    <TextEditor onChange={(e) =>
                        setFormData({
                            ...formData,
                            messageInEnglish: e
                        })}
                        value={formData?.messageInEnglish}
                        
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                        Message In Hindi
                    </span>
                    <TextEditor onChange={(e) =>
                        setFormData({
                            ...formData,
                            messageInHindi: e
                        })}
                        value={formData?.messageInHindi}
                    />
                </div>
            </div>

            {/* Meta tags */}
            <div className="flex flex-col shadow-lg p-5 m-5">
                <span className="font-semibold text-xl text-textPrimary mb-3"> Meta Tags </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    <LabelInput
                        type="text"
                        className="w-full"
                        label="Title"
                        onChange={(e) =>
                            setFormData({ ...formData, metaTags: { ...formData?.metaTags, title: e.target.value } })}
                        value={formData?.metaTags?.title}
                        required={true}
                    />

                    <LabelInput
                        type="text"
                        className="w-full"
                        label="Description"
                        onChange={(e) =>
                            setFormData({ ...formData, metaTags: { ...formData?.metaTags, description: e.target.value } })}

                        value={formData?.metaTags?.description}
                        required={true}
                    />

                    <LabelInput
                        type="text"
                        className="w-full"
                        label="Keywords"
                        onChange={(e) =>
                            setFormData({ ...formData,
                                metaTags:{ ...formData?.metaTags, keywords: e.target.value } })}
                        value={formData?.metaTags?.keywords}
                        required={true}
                    />
                </div>
            </div>

            <div className="m-5">
                <input 
                    type="submit" 
                    className='w-full rounded-md text-textWhite py-2 bg-bgSafron shadow-shadowDownL hover:shadow-none duration-200'
                />
            </div>

        </form>

    </div>
    )
}

export default page