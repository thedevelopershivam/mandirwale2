function LabeInput({ label = "username", type = "text", placeholder = "your name", onChange = (e)=>{console.log(e.target.value)}, error = false, errorMsg, className, value = "", required = true }) {
    return (
        <label className="flex flex-col">
            <span className="capitalize"> {label} </span>
            <input
                type={type}
                className={`py-1 px-2 w-full rounded focus:outline-none border-[1px] h-10 lowercase
                ${className} invalid:border-red-500`
                }
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required={required}
            />
            {error && <span className=" text-[13px] font-semibold text-textDanger"> 
                {errorMsg}
            </span>}

        </label>
    )
}

export default LabeInput