import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
    api: {
        bodyParser: false
    }
}

const readFile = (req, saveLocally) => {
    const options = formidable.Options = {};

    if (saveLocally) {
        options.uploadDir = path.join(process.cwd(), "/public/assets/images/saved");
        options.filename = (name, ext, path, form) => {
            return Date.now().toString() + "_" + path.originalFileName;
        }
    }

    const form = formidable(options);
    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err)
            resolve({ fields, files });
        })
    })
}

const saveData = async (req, res) => {
    // const form = formidable();
    // form.parse(req, (err, fields, files) => {
    // });

    console.clear();
    console.log("hey there i am here 💖💖💖💖💖💖💖");

    // await readFile(req, true);
    res.json({ status: "ok" })
}

export default saveData;