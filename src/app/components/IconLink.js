import Link from "next/link"

function IconLink({ href = "#", number, icon, className ='' }) {
  return (
    <Link href={href} className={`flex items-center duration-300 hover:text-blue-400 gap-1 ${className}`}>  
        <span>{icon} </span>
        <span>{number} </span>
    </Link>
  )
}

export default IconLink