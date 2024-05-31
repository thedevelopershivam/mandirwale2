import { H1 } from "@/app/components/Headings"
import Wrapper from "@/app/components/Wrapper"
import Horoscope from "@/app/components/index/HoroScope"

function page() {
  return (
    <Wrapper>
      <Horoscope />
    </Wrapper>
  )
}

export default page