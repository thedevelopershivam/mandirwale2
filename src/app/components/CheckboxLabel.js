
function CheckboxLabel() {
    return (
        <label className="flex gap-1 justify-center items-center capitalize cursor-pointer hover:text-textMaroon">
            <input type="checkbox" className="w-[16px] h-[16px]" value="" />
            <span className="font-semibold"> label </span>
        </label>
    )
}

export default CheckboxLabel