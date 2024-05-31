import Wrapper from "@/app/components/Wrapper";
import Image from 'next/image';
import Link from 'next/link';
import { IsLoading } from "../IsLoading";

function ImageCard({ href = "#", src = "/assets/images/krishnaji.webp", title = "Bhagvad Gita" }) {
  return <Link href={href} className='w-full h-full md:h-[calc(150px+3.325vw)] rounded bg-green-500 overflow-hidden relative duration-300 hover:shadow-shadowDown'>
    <Image src={src} className="w-full h-full" width={300} height={400} alt={title} style={{ objectFit: "cover" }} />

    <div className='absolute left-0 bottom-0 bg-[rgba(100,100,100,.4)] p-2.5 font-semibold backdrop-blur-sm w-full text-center'>
      <span className='line-clamp-1 text-textWhite capitalize w-full'>
        {title}
      </span>
    </div>
  </Link>
}





export default function TopCollage({ topBanner }) {

  const data = { six: topBanner?.data, random: { ...topBanner?.randomPost, processFile: JSON.parse(topBanner?.randomPost?.processFile) } }

  return (!data ? <IsLoading /> :
    <Wrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-7 bg-[rgba(50,50,100,.04)]">
      <Link href={`/${data?.random?.category?.category}/${data?.random?.subCategory?.subCategory}/${data?.random?.title}?page=1`} className="w-full max-h-[450px] md:h-[calc(300px+7.65vw)] bg-red-800 rounded overflow-hidden shadow-lg relative group/hoverCard">

        <Image src={data?.random?.processFile[0] || "/assets/images/bhagwat_gita/krishna_ji_addressing_arjun1.png"} className='w-full h-full' width={300} height={300} alt='krishna' style={{ objectFit: "cover" }} objectPosition='50% 50%' />

        <div className='absolute left-0 bottom-0 bg-[rgba(100,100,100,.4)] p-2.5 font-semibold backdrop-blur-sm w-full'>
          <span className='line-clamp-2 text-textWhite text-xl group-hover/hoverCard:line-clamp-6 duration-300 w-full'>
            {data?.random?.title}
          </span>
        </div>
      </Link>


      <div className='grid md:col-span-2 grid-cols-2 md:grid-cols-3 gap-3'>
        {
          data?.six?.map((item, index) =>
            <ImageCard src={item.processFile !== "no file" ? item.processFile : "/assets/images/bhagwat_gita/krishna_ji_addressing_arjun1.png"} title={item.category} href={`/${item.category}?page=1`} key={index} />)
        }


      </div>
    </Wrapper>
  )
}
