"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function Button({ children = "Submit", className, onClick, type = "button", loader = false }) {
    const param = new useParams();

    return (
        <button type={type} className={`w-full rounded-md text-textWhite py-2 bg-bgSafron shadow-shadowDownL hover:shadow-none duration-200 ${className, loader && "opacity-50"}`} onClick={onClick} disabled={loader}>
            {
                loader ?
                    <div className='flex items-center justify-center gap-2' >
                        <AiOutlineLoading3Quarters className=" animate-spin " />
                        Processing...
                    </div>
                    :
                    children
            }

        </button>
    )
}

export default Button