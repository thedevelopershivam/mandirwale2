import axios from "axios"
import { NextResponse } from 'next/server';

export const POST = async (request) => {
    const data = await request.json();
    console.log("💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖💖")

    try {
        await axios.post("/create-category", request)
            .then((res) => NextResponse.json(res))
            .catch((e) => {
                return NextResponse.json({ e })
            })
    } catch (err) { return NextResponse.json({ err }) };
    return NextResponse.json({ name: "hey" });
}