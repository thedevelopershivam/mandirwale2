function InputFile({ onChange = (e) => { console.log(e.target.files[0]) }, label= "File" }) {
    return (
        <label className="flex flex-col">
            <span> {label} </span>
            <input type="file" className="py-1 px-2 border-[1px] border-gray-200 rounded" accept="images/*" onChange={onChange} />
        </label>
    )
}

export default InputFile