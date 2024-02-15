// pages/api/upload.js
// import { IncomingForm } from 'formidable';
// import { promises as fs } from 'fs';
// import path from 'path';

// export const config = {
//     api: {
//         bodyParser: false, // We're disabling bodyParser to use formidable instead
//     },
// };

export default async function handler(req, res) {
    // // Only allow POST requests

    // console.log("first")

    // if (req.method !== 'POST') {
    //     res.status(405).end(); // Method Not Allowed
    //     return;
    // }

    // const data = await new Promise((resolve, reject) => {
    //     const form = new IncomingForm();
    //     const uploadDir = path.join(process.cwd(), "/public/assets/images/saved/");


    //     form.parse(req, async (err, fields, files) => {
    //         console.log({ fields })
    //         if (err) {
    //             console.log("rejection")
    //             reject(err);
    //             return;
    //         }
    //         // Example of how you can handle the file and fields
    //         // You might want to move or process the file here
    //         const file = files.file[0]; // Adjust depending on how you send the files and the field name
    //         // Optionally move the file from the temporary directory to a desired location
    //         // Ensure the target directory exists
    //         await fs.rename(file.filepath, `${uploadDir}/${file.originalFilename}`);
    //         resolve({ fields, files });
    //     });
    // });

    // // Respond back to the client
    // res.status(200).json({ message: 'File uploaded successfully', data });
}
