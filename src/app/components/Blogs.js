import Link from "next/link"
import Blog from "./Blog"
import { H2 } from "./Headings"
import Wrapper from "./Wrapper"

function Blogs({data}) {
    return (
        <>
            <Wrapper className="flex flex-col gap-2 justify-center items-center">
                <section className='grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 gap-y-10 gap-x-5 md:gap-y-5'>
                    {
                        data?.map((item, index) =>
                        <Blog
                            title={item.title}
                            key={index}
                            description={{ __html: item?.hindiPost }}
                                href={`${item?.category?.category}?category=${item?.subCategory?.subCategory}&subCategory=${item?.lowerCategory?.lowerCategory}&postId=${item?.id}&title=${item?.title}`}
                        />)
                    }
                </section>
            </Wrapper>
            {/* <Link href={"#"} className="text-end pr-11 mt-5 font-semibold">
                View All
            </Link> */}
        </>
    )
}

export default Blogs