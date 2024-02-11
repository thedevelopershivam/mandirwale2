import axios from "@/app/util/axios";
import { NextResponse } from 'next/server';


export const POST = async (request) => {

    const reqBody = await request.json();
    let response = NextResponse.json({});

    try {
        await axios.post("http://localhost:8000/api/v1/admin/create-category", reqBody)
            .then((res) => {
                response = NextResponse.json({
                    status: 'success',
                    message: res.data
                });
            })
            .catch((e) => {
                console.log(e)
                return e;
            })
        return response;
    } catch (err) { return NextResponse.json({ err }) };
}