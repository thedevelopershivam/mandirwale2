import axios from "@/app/util/axios"; // Ensure this import works on the server-side
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const rec = await request.formData();
        const data = new FormData();


        // Assuming 'files' is a FileList or array of file objects
        // const files = rec.getAll("files");
        // files.forEach(file => data.append("files", file));

        // Assuming 'category' is an array, even if it has one item
        // const categories = rec.getAll("category");
        // categories.forEach(category => data.append("category", category));

        // Ensure axios call is awaited and handle response
        console.log(rec.body)
        const response = await axios("http://localhost:8000/api/v1/admin/create-category", {
            method: "POST",
            body: rec.body,
        });



        // Return actual response data
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 404 });
    }
};
