import Button from "@/app/components/Button";
import Error from "@/app/components/Error";
import MuiModal from "@/app/components/MuiModal"
import { LabelInput } from '@/app/components/form/LabeInput';
import { useState } from "react";


export const EditModal = () => {
    
    const [categoryData, setCategoryData] = useState({});
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    return(  <MuiModal header="Create category" modalButton="Create" className="w-full rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 max-w-[150px] hover:bg-bgSafron" >
            <form >
                <Error error={error} className="text-sm" />
                <div className='flex flex-col gap-2'>
                    <LabelInput
                        type='text'
                        label='Category Name'
                        className="py-2"
                        onChange={(e) => setCategoryData({ ...categoryData, category: e.target.value })}
                        error={error}
                        errorMsg={errorMsg}
                        value={categoryData.category}
                    />
                    <LabelInput
                        type='file'
                        label='File'
                        className="py-2"
                        onChange={(e) => setCategoryData({ ...categoryData, files: e.target.files[0] })}
                        value={categoryData.files}
                        error={error && error}
                    />
                    <Button type='submit' className="max-w-[130px] mx-auto bg-butNeel mt-4">
                        Save
                    </Button>
                </div>
            </form>

        </MuiModal>

    
        
    )
}