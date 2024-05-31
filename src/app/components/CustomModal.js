import { useState } from "react";

export function CustomModal ({children = null, isModalVisible = false, header, closeModal}) {


    const stopPropagation = (e) => {
        e.stopPropagation();
    };



    return ( isModalVisible && <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center backdrop-blur-md z-[9]" onClick={() => closeModal(false)} >

        <section className="flex flex-col max-w-[600px] w-full max-h-[500px] bg-white rounded shadow-lg" onClick={stopPropagation}>
            <section className="w-full h-12 flex items-center px-3 bg-bgNeel text-textWhite text-lg font-semibold line-clamp-1 rounded-t capitalize">
                {header}
            </section>
            <section className="overflow-y-auto vs h-auto max-h-[calc(500px-50px)] p-3">
                {
                    children
                }
            </section>
        </section>
    </div>    
    )
}