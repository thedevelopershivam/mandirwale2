import { NextResponse } from "next/server"
import axios from 'axios';


export async function POST(request) {
    const url = `http://localhost:8000/api/v1/admin/login-user`;
    const reqBody = await request.json();
    try {
        let response = NextResponse.next();
        await axios.post(url, reqBody)
            .then((res) => {
                if (res.data.token) {
                    response = NextResponse.json({
                        status: "success",
                        message: "Login Successful",
                    })
                    response.cookies.set("token", res.data.token, { httpOnly: true });
                }
            })
            .catch((err) => console.log(err));

        return response;
    } catch (err) {
        console.log(err)
    }

}
