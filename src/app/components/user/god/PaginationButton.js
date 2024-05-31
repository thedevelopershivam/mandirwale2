import  Link  from 'next/link';

function PaginationButton({href="#", className, children, pageNum,  disable = 1}) {
    
  return (
      <Link href={href} className={`h-10 w-10 border-[.3px] border-gray-300 hover:shadow-none cursor-pointer shadow-lg rounded flex justify-center items-center ${Number(pageNum) === disable ? "pointer-events-none bg-gray-300 shadow-none opacity-50" : "pointer-events-auto opacity-100 "} ${className}`}>
          {children}
      </Link>
  )
}

export default PaginationButton