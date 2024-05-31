function LabelInputEdit({ label = "username", type = "text", placeholder = "your name", onChange, error, errorMsg, className, attr, value=null }) {
    return (
        <label className="flex flex-col">
            <span className="text-textNeel capitalize"> {label} </span>
            <input
                type={type}
                className={` py-1 px-2 w-full rounded focus:outline-none border-[1px] ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                {...attr}
            />
            {error && <span className=" text-[13px] font-semibold text-textDanger"> 
                {errorMsg}
            </span>}

        </label>
    )
}

export default LabelInputEdit