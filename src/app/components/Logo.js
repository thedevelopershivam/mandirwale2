import Image from "next/image"

function Logo({className}) {
    return (
        <Image src="/assets/images/first.jpg" width={200} height={100} className={`${className}`} style={{ objectFit: "cover" }} alt={"website name"} />
    )
}

export default Logo