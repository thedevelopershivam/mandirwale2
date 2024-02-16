import axiosInstance from "@/app/util/axios"
import { NextResponse } from 'next/server';
// import axiosInstance from './../../../../util/axios';

export const POST = async (request) => {

    const reqBody = await request.formData();
    // let response = NextResponse.json({});

    try {
        await axios.post("http://localhost:8000/api/v1/admin/create-category", reqBody)
            .then((res) => NextResponse.json(res))
            .catch((e) => {
                return NextResponse.json({ e })
            })
    } catch (err) { return NextResponse.json({ err }) };
    return NextResponse.json({ name: "hey" });
}