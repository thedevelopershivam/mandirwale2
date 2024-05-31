"use client"
import Wrapper from '@/app/components/Wrapper'
import React, { useEffect, useState } from 'react'
import SPage from '@/app/components/user/god/SPage.js';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

import userInstance from '@/app/util/userAxios';
import { IsLoading } from '@/app/components/IsLoading';
import { H3 } from '@/app/components/Headings';
import Button from '@/app/components/Button';


function page() {
    const router = useRouter();
    const param = new useParams();
    const paramQuery = new useSearchParams();


    const filterQuery = { cities: paramQuery.get('cities'), states: paramQuery.get('states'), god: paramQuery.get('god') };
    // const citiesQuery = paramQuery.get('cities');
    // const statesQuery = paramQuery.get('states');
    // const godQuery = paramQuery.get('god');

    const getCurrentPage = param.category;
    const currentPageNum = paramQuery.get("page");
    
    const [allParams, setAllParams] = useState();
    const [routeQuery, setRouteQuery] = useState();
    
    const key = Array.from(paramQuery.keys());

    let keyVal = "";
    const [data, setData] = useState();
    
    function getRec() {
        for (let a = 0; a < key.length; a++) {
            keyVal = {
                ...keyVal,
                [key[a]] :paramQuery.get(key[a]) 
            }
        }
        setAllParams(keyVal);
    }
    
    
    const  objectToQueryString = (obj) => {
        const routeQueryData = [];
        // Iterate over each key-value pair in the object
        for (const key in allParams) {
            if (allParams.hasOwnProperty(key)) {
                const value = allParams[key];
                
                if(value !== "")
                {
                    routeQueryData.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
                }
            }   
        }
        return routeQueryData.join('&');
    };
    
    async function getPageData() {
        const url = `/multiple-blogs/${getCurrentPage}?${paramQuery.toString()}`;
        console.log({url})
        try {
            const data = await userInstance.get(`${url}`);
            return setData(data?.data);
        }
        catch (err) { return err };
    }
    
    useEffect(() => {
        getPageData();
        getRec();
    }, [])

    const redirectOnPage = (e, index) => {
        const indexVal = [data?.label[index]];
        const value = e.target.value !== "Select Option" ? e.target.value : ""; 
        setAllParams({ ...allParams, [data?.label[index]]: value })
    }


    
    const submitFilter = async () => {
        const getParams = objectToQueryString(allParams);
        const newUrl = `/${getCurrentPage}?${getParams}`;
        router.push(newUrl);

        const data = await userInstance.get(`/multiple-blogs${newUrl}`);
        setData(data?.data);
    }


    return (
        <Wrapper className="flex px-1 sm:px-[calc(0px+4vw)] md:gap-4 mt-5">
            {/* Filter */}
            <section className='md:flex flex-col sticky top-2 w-full max-w-[calc(200px+6vw)] h-[450px] hidden'>
                <H3> Filter </H3>
                <div className='rounded flex flex-col gap-4 shadow-lg px-3 py-4 w-full'>
                    {
                        data?.filter?.map((item, index) =>
                            <select 
                            value={ allParams[data?.label[index]] || ""}
                            className={`w-full capitalize h-10 border-[1px] border-gray-200 rounded focus:outline-none`}
                            title={data?.label[index]}
                            onChange={(e) => {
                                redirectOnPage(e, index);
                            }}
                            key={index}
                        >
                            <option> Select Option </option>
                            {
                                item.map((items, indexs)=> 
                                <option value={items.title} key={indexs}>
                                    {items.title}
                                </option>
                            )}
                        </select>
                    )}
                    <Button onClick={submitFilter}/>
                </div>
            </section>
            {/* Filter */}


            {
                !data ? <IsLoading /> : data?.data.length > 0 ? <SPage data={data?.data} /> : <div className="flex justify-center items-center w-full"> 
                    No Record Found! Please try different combination. 
                </div>
            }
        </Wrapper>
    )
}

export default page