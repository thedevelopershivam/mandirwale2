"use client"
import Button from "@/app/components/Button"
import LabeInput from "@/app/components/form/LabeInput"
import Image from "next/image"
import Link from "next/link"

function page() {
    return (
        <div className="w-full md:h-screen flex justify-center items-center p-5">

            <section className="md:w-[700px] flex md:flex-row flex-col border-[1px] shadow-md">
                <div className="max-w-[350px] w-full flex justify-center items-center min-h-32 bg-bgNeel">
                    <Image src="/assets/images/logo/logo.png" width={150} height={150} alt="mandir sewa" style={{ objectFit: "contain" }} />
                </div>
                <div className="max-w-[350px] w-full flex justify-center items-center p-4">
                    <section className="w-full flex flex-col gap-3">
                        <LabeInput label="Username" className="capitalize" type="txet" placeholder="Your full name" />
                        <LabeInput label="Email" className="lowercase" type="email" />


                        <LabeInput label="Password" type="password" />
                        <LabeInput format="+1 (###) ###-####"
                            label="Mobile" type="number" />


                        <Button className="my-2"> Login </Button>

                        <div className="text-center flex flex-wrap gap-1 text-sm mt-2">
                            If you alredy have an account
                            <Link href="./login" className="text-red-500 font-semibold hover:text-red-700 cursor-pointer">
                                Login here
                            </Link>
                        </div>

                    </section>
                </div>
            </section>

        </div>
    )
}

export default page