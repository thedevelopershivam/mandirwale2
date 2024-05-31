import Link from 'next/link'
function ViewMore({ children, href = "#" }) {
    return (
        <div className="text-end">
            <Link href={href} className={`text-textLink font-semibold hover:text-textMaroon`}>
                {children}
            </Link>
        </div>
    )
}

export default ViewMore