"use client";
import React, { useEffect, useState } from 'react'
import Wrapper from '../../Wrapper'
import BlogFull from '../../BlogFull'
import SuggestedPost from '../../SuggestedPost'

function FullPageBlog({blog, category}) {
    
    console.log("gere " , category)

    return ( <Wrapper className="flex flex-col gap-5 my-3">
          {/* <Stepper /> */}
          <div className="flex md:gap-5">
            <BlogFull category={category} data={blog} />
              <section className="sticky top-0 w-[calc(350px+15vw)] max-h-[calc(400px+10vw)] hidden md:flex flex-col">
                  <b className="text-gray-500"> You may like this too </b>
                  <div className="bg-bgWhite flex flex-col gap-3 max-h-[calc(350px+10vw)] overflow-y-auto vs  shadow-lg p-2 snap-y ">
                      <SuggestedPost  />
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

export default FullPageBlog