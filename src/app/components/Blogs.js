import Blog from "./Blog"
import { H2 } from "./Headings"
import ViewMore from "./ViewMore"
import Wrapper from "./Wrapper"

function Blogs() {
    return (
        <Wrapper className="flex flex-col gap-2 justify-center items-center">
            <H2 className="text-textLink capitalize">
                Blogs
            </H2>

            <section className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4'>
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </section>

            <ViewMore>
                View More
            </ViewMore>
        </Wrapper>
    )
}

export default Blogs