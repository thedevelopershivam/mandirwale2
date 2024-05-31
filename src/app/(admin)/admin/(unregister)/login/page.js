"use client";
import Button from "@/app/components/Button";
import { redirect, useRouter } from 'next/navigation'
import LabeInput from "@/app/components/form/LabeInput";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, getCsrfToken, getSession } from  "next-auth/react";
import {  signIn, signOut } from "next-auth/react"
import Error from "@/app/components/Error";


function page() {

    const { data: session } = useSession()

    console.log(session)
    
    const [isLoading, setIsLoading] = useState(false);
    const [showError, setShowError] = useState(false);
    const [error, setError] = useState();
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        email: "shivam@gmail.com",
        password: "12345678"
    });
    
    async function login(e)
    {    
        e.preventDefault();   
        if (!formData.email || !formData.email.includes("@") || formData.password.length < 7) {
            return setError("pls provide valid email id and password!")
        }

        const result =  await signIn(
            'credentials',
            { 
                redirect: false,
                email: formData.email,
                password: formData.password
            }
        );

        if(result.error)
        {
            return setError(result.error);
        }
    }
    
    
    return (
        <div className="w-full min-h-screen flex justify-center items-center p-5">
            <section className="md:w-[700px] flex md:flex-row flex-col border-[1px] shadow-md">
                <div className="max-w-[350px] w-full flex justify-center items-center min-h-32 bg-bgNeel">
                    <Image src="/assets/images/logo/logo.png"
                        width={150}
                        height={150}
                        alt="mandir sewa"
                        style={{ objectFit: "contain" }} />
                </div>
                <div className="max-w-[350px] w-full flex justify-center items-center p-4">
                    <form method="post">
                        <Error className="font-semibold text-sm" error={error} />
                        <section className="w-full flex flex-col gap-3">

                            <LabeInput
                                label="Email"
                                className="lowercase valid:border-[1px]"
                                type="email"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                attr={{ required: "required" }}
                                error={showError}
                                value={formData?.email}
                                errorMsg={(!formData?.email || formData?.email === "") ? "Email is required!" : ""}
                            />

                            <div className="flex flex-col">
                                <LabeInput label="Password" type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    attr={{ required: "required", min: 8 }}
                                    error={showError}
                                    value={formData?.password}
                                    errorMsg={!formData?.password ? 'Password is required' : formData?.password.length < 8 ? "Password must have 8 characters" : formData?.password === "" ? "Password is required" : ""}
                                />

                                <span className="font-semibold text-sm ml-auto cursor-pointer text-red-500 hover:text-red-700">
                                    Forget Password
                                </span>
                            </div>


                            <Button type="submit" loader={isLoading} className="my-2" onClick={login} >
                                Login
                            </Button>

                            <div className="text-center flex flex-wrap gap-1 text-sm mt-2">
                                If you don't have an account
                                <Link href="./sign-up" className="text-red-500 font-semibold hover:text-red-700 cursor-pointer">
                                    Register here
                                </Link>
                            </div>

                        </section>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default page