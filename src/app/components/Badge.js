import Link from "next/link"

function Badge({ badge = "Badge", href="" }) {
    return (
        href ?
            <Link href={href} className="bg-bgSafron px-2.5 py-0.5 text-textWhite rounded capitalize font-medium shadow duration-150 hover:bg-bgNeel">
                {badge}
            </Link>
            :
            <div className="bg-bgSafron px-2.5 py-0.5 text-textWhite rounded capitalize font-medium shadow duration-150 hover:bg-bgNeel">
                {badge}
            </div>
    )
}

export default Badge