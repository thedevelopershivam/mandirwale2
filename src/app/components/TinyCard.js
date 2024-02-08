import Link from "next/link"

function TinyCard() {
    return (
        <Link href="" className="flex flex-col rounded-md w-[180px] h-[180px] shadow-shadowDown border-[1px] border-bSafron hover:shadow-none duration-200">
            <img src="./assets/images/mobile-card.jpg" className="w-full h-auto rounded-t-md" alr="first" />
            <section className="h-[60px] flex flex-col justify-center items-center p-2">
                <span className="line-clamp-1 text-center font-semibold">
                    Krishna Temple
                </span>
                <span className="line-clamp-1 text-center font-semibold text-textMaroon capitalize">
                    Jaipur
                </span>
            </section>
        </Link>
    )
}

export default TinyCard