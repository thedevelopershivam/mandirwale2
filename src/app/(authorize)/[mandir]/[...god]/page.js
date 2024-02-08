"use client"
import Wrapper from "@/app/components/Wrapper";
import { useParams } from "next/navigation"
import Stepper from "@/app/components/Stepper";
import BlogFull from "@/app/components/BlogFull";
import { H3 } from './../../../components/Headings';
import SuggestedPost from "@/app/components/SuggestedPost";


function page() {
    const param = new useParams();
    return (

        <Wrapper className="flex flex-col gap-5 my-3">
            <Stepper />
            <div className="flex md:gap-5">
                <BlogFull />
                <section className="sticky top-0 w-[calc(350px+15vw)] max-h-[calc(400px+10vw)] hidden md:flex flex-col">

                    <b className="text-gray-500"> You may like this too </b>
                    <div className="bg-bgWhite flex flex-col gap-3 max-h-[calc(350px+10vw)] overflow-y-auto vs  shadow-lg p-2 snap-y ">
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />
                        <SuggestedPost />

                    </div>

                </section>
            </div>

        </Wrapper>
    )
}

export default page