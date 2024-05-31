import React from 'react'

function SweetAlertWrapper({children}) {
    

    return (
        <div className='absolute right-2 top-5 max-w-[300px] w-full h-auto overflow-y-auto flex flex-col gap-4 max-h-[500px]'>
        {

            children
        }
        </div>
    )
}

export default SweetAlertWrapper