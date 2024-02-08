import Link from 'next/link'
function ViewMore({ children }) {
    return (
        <div className="text-end">
            <Link href="" className={`text-textLink font-semibold hover:text-textMaroon`}>
                {children}
            </Link>
        </div>
    )
}

export default ViewMore