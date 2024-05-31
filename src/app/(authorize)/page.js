
import React from 'react';
import dynamic from 'next/dynamic';

import Wrapper from '@/app/components/Wrapper';
import { H1, H2 } from '@/app/components/Headings';
// import ProductCard from '@/app/components/ProductCard';
// import ViewMore from '@/app/components/ViewMore';
import RoundIcon from '@/app/components/RoundIcon';

import Review from '@/app/components/index/Review';
import TopCollage from '@/app/components/index/TopCollage';
import OurServices from '../components/index/OurServices';
import HoroscopeCard from '@/app/components/index/HoroscopeCard';
import Blogs from '../components/Blogs';
import BhagwatGita from '@/app/components/index/BhagwatGita';
import ContactUs from '../components/index/ContactUs';
import AboutUs from '../components/index/AboutUs';
import ViewMore from '../components/ViewMore';

async function getTopBanner() {
  const data = await fetch("http://localhost:8000/api/v1/user/index-top-banner");
  const rec = data.json();
  return rec;
}

// async function getRandomTemple() {
//   const data = await fetch("http://localhost:8000/api/v1/user/index-top-banner");
//   const rec = data.json();
//   return rec;
// }


async function page() {
  const data = await getTopBanner();


  

  return (
    <div className='flex flex-col gap-20 mb-10 w-full'>
      <TopCollage topBanner={data} />

      <div className='flex flex-col gap-1 text-center bg-[rgba(100,100,100,.04)] py-6'>
        <H1> Gods  </H1>
        <Wrapper className='flex flex-row md:justify-center items-center overflow-x-auto gap-4 hs p-3 mx-5 snap-mandatory snap-x '>

          {
            data?.fiveTemples?.map((item, index) =>
              <RoundIcon href={`/${item?.category?.category?.toLowerCase() }/${item?.subCategory?.subCategory?.toLowerCase()}/${item?.lowerCategory?.lowerCategory?.toLowerCase()}/`}
                name={item?.lowerCategory?.lowerCategory}
                count={item?.lowerCategory?.count}
                key={index}
              />
            )
          }



        </Wrapper>
        <Wrapper>
          <ViewMore href={`/${data?.fiveTemples[0]?.category?.category}/${data?.fiveTemples[0]?.subCategory?.subCategory}`}>
            View More
          </ViewMore>
        </Wrapper>
      </div>

      <div className='flex flex-col gap-1 text-center bg-[rgba(0,100,0,.04)] py-6'>
        <H1> Our Services  </H1>
        <OurServices />
      </div>

      <div className='flex flex-col gap-1 text-center bg-[rgba(0,0,100,.04)] py-6'>
        <H1> Horoscope  </H1>
        <Wrapper className={`grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8`}>
          <HoroscopeCard />
          <HoroscopeCard />
          <HoroscopeCard />

          <HoroscopeCard />
          <HoroscopeCard />
          <HoroscopeCard />
        </Wrapper>
      </div>

      <div className='flex flex-col gap-1 text-center bg-[rgba(100,0,100,.04)] py-6'>
        <H1> Our Recent Blogs  </H1>
        <Blogs data={data?.threeBlogs} />
      </div>

      <div className='flex flex-col gap-1 text-center bg-[rgba(100,0,0,.04)] py-6'>
        <H1> Bhagwat Gita Quotes  </H1>
        <BhagwatGita />
      </div>

      <div className='flex flex-col gap-1 text-center bg-[rgba(100,0,0,.04)] py-6'>
        <H1> About Us  </H1>
        <AboutUs />
      </div>


      <div className='flex flex-col gap-1 text-center bg-[rgba(0,100,100,.04)] py-6'>
        <H1> Review  </H1>
        <Review />
      </div>

      <div className='flex flex-col gap-1 text-center py-6 bg-[url(/assets/images/bhagwat_gita/peackok_feature.jpeg)] bg-center bg-no-repeat bg-cover'>
        <ContactUs />
      </div>


    </div>
  )
}

export default page
