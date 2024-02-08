"use client"
import React, { useEffect } from 'react';
// import TopNavbar from '@/app/components/TopNavbar';
import BootstrapCarousel from '../components/BootstrapCarousel';
import Wrapper from '../components/Wrapper';
import { H1, H2 } from '../components/Headings';
import ProductCard from '../components/ProductCard';
import ViewMore from '../components/ViewMore';
import RoundIcon from '../components/RoundIcon';
import TinyCard from '../components/TinyCard';
import Blogs from '../components/Blogs';

function page() {
  return (
    <section className='flex flex-col gap-12'>

      <BootstrapCarousel />
      {/* temples */}
      <Wrapper className='flex flex-col gap-3 justify-center items-center'>
        <H2 className="text-textLink capitalize"> Some Important temples </H2>
        <div className="h-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <ViewMore>
          View More
        </ViewMore>
      </Wrapper>


      {/*  */}
      <Wrapper className='flex flex-col justify-center items-center gap-3'>
        <H2 className="text-textLink capitalize">
          List of all gods
        </H2>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8'>
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
          <RoundIcon />
        </div>
        <ViewMore>
          View More
        </ViewMore>

      </Wrapper>
      {/* +++++++++++++ services +++++++++++++ */}
      <Wrapper className='flex flex-col justify-center items-center gap-3'>
        <H2 className="text-textLink capitalize">
          temples state wise
        </H2>
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8'>

          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />
          <TinyCard />

        </div>
        <ViewMore>
          View More
        </ViewMore>
      </Wrapper>
      {/* +++++++++++++ services +++++++++++++ */}


      {/* =============== Blogs ============== */}
      <Blogs />
      {/* =============== Blogs ============== */}

    </section>
  )
}

export default page