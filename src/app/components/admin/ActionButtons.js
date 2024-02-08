
export function ActionButton({ children, className }) {
    return (
        <button type="button" className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 ${className}`} >
            {children}
        </button>
    )
}