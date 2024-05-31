import Button from "@/app/components/Button";
import Error from "@/app/components/Error"
import MuiModal from "@/app/components/MuiModal"
import { LabelInput } from '@/app/components/form/LabeInput';


function EditModal() {
    const [error, setError] = React.useState(false);
    const [categoryData, setCategoryData] = useState({ category: "", file: "" });

    return (<> <MuiModal header="Create category" modalButton={<MdEditNote size={20} />} buttonCss="hover:bg-bgWhite hover:text-textSuccess bg-butSuccess">

            <form onSubmit={createCategory}>
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
    </>
    )
}

export default EditModal