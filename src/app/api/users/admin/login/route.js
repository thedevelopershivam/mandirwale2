import { NextResponse } from "next/server"
import axios from 'axios';


export async function POST(request, response) {

    const formData = await request.json();
    try {
        const userRec = await axios.post("http://localhost:8000/api/v1/admin/login-user", formData);
        let response;
        
        const user = userRec?.data?.data;
        const token = userRec?.data?.token;

        response = NextResponse.json({
            status: "success",
            token,
            user
        })
        // const cookieOptions = `Max-Age=${60 * 60 * 24 * 7}; Path=/; HttpOnly; Secure; SameSite=Lax`;
        
        // response.cookies.set('Authorization', `Bearer=${token}`, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); //maximum age of the cookie is 10 days 
        return response;
    }
    catch (err) {
        return NextResponse.json({
            status: 403,
            error: err?.response?.data?.errors
        })
    }
}
