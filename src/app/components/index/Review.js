"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { HiStar } from "react-icons/hi2";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';
import Wrapper from '../Wrapper';
import Image from 'next/image';



function ReviewCard()
{
    return <div className='w-[calc(100%-25px)] flex flex-col justify-center items-center p-4 h-auto shadow-lg rouded mb-5 m-4 rounded-md border-[1px] border-gray-200 bg-white'>
        
        <section className='text-center flex flex-col items-center gap-3'>
            <Image src="/assets/images/first.jpeg" className='w-[100px] h-[100px] rounded-full' width={100} height={100} alt="username"/>

            <div className='font-semibold text-xl flex flex-col gap-2'>
                <span className='text-textSinduri'>
                    Shivam Mittal
                    </span> 
                <span className="flex gap-1 "> 
                    <HiStar className="text-yellow-500 text-shadow" size={30}/>
                    <HiStar className="text-yellow-500 text-shadow" size={30}/>
                    <HiStar className="text-yellow-500 text-shadow" size={30}/>
                    <HiStar className="text-yellow-500 text-shadow" size={30}/>
                    <CiStar size={30}/>
                </span> 


            </div>


{/* before:block before:absolute before:-inset-1 before:-skew-y-2 before:shadow-lg before:bg-bgGold before:z-[-1] text-textWhite   */}
            <blockquote className="relative p-2 h-auto sm:h-[150px] flex justify-center items-center" >
                <span className='absolute left-0 top-1'>
                    <FaQuoteLeft
                        size={30}
                        className="text-[rgba(200,200,200,.5)]"
                    />
                </span>
                Warum helle spät nicht heut stund' sie zu geliebet denkst, und lachtet trübhell lange gar dahinten wangen hab, denkst sanken schwester doch weh nebelferne perlet zürntest. Ich mit schönen du.
            </blockquote>

        </section>
    </div>
}

export default function Review() {
    return (
        <Wrapper className={"px-5 w-full overflow-hidden"}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                draggable={true}
                breakpoints={{
                    640: {slidesPerView: 2},
                    1000: {slidesPerView: 3}
                }}
                modules={[Pagination]}
                className=""
            >
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard>

                    </ReviewCard>
                </SwiperSlide>
            </Swiper>
        </Wrapper>
    );
}
