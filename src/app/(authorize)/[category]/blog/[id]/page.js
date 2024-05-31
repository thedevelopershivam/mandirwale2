"use server"
// import { useRouter } from 'next/router';
import Wrapper from "@/app/components/Wrapper"
import FullPageBlog from "@/app/components/user/god/FullPageBlog"
import userInstance from '@/app/util/userAxios';


 async function getData(id) {
  const data = await userInstance.get(`/single-blog?post_id=${id}`);
  return data;
}

async function page({ params }) {
  const data = await getData(params.id);
  console.log(params.category)

  return (
    <Wrapper>
      <FullPageBlog category={params.category} blog={data?.data?.data}/>
    </Wrapper>
  )
}

export default page