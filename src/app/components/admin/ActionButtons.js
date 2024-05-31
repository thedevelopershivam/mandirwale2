import Link from "next/link"

export function DeleteButton({ children, href, onClick }) {
    return ( 
        !href ? <button type="button" className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 hover:bg-bgWhite hover:text-textDanger bg-butDanger`} onClick={onClick}>
            {children}
        </button> : <Link href={href} className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 hover:bg-bgWhite hover:text-textDanger bg-butDanger`}>
            {children}
        </Link>
    )
}

export function ViewButton({ children, href, onClick }) {
    return ( 
        !href ? <button type="button" className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 hover:bg-bgWhite hover:text-blue-500 bg-blue-500`} onClick={onClick}>
            {children}
        </button> 
        :
        <Link href={href} className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 hover:bg-bgWhite hover:text-blue-500 bg-blue-500`}>
            {children}
        </Link>
    )
}

export function EditButton({ children, href, onClick }) {
    return (
        !href ?
        <button type="button" className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 hover:bg-bgWhite hover:text-textSuccess bg-butSuccess`} onClick={onClick}>
            {children}
        </button> :  <Link href={href} className={`flex justify-center items-center  p-1 text-textWhite rounded shadow-md hover:shadow-none duration-500 hover:bg-bgWhite hover:text-textSuccess bg-butSuccess`} >
            {children}
        </Link>
    )
}