const reqBody = await request.formData();

let files = reqBody.getAll('files'); // Get all files under the 'files' key

// Ensure 'files' is always an array for consistency
files = files.length ? files : [files];

// Define allowed MIME types and max file size (e.g., 5MB)
const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
const maxFileSize = 5 * 1024 * 1024; // 5MB in bytes

// Directory to save files
const saveDirectory = path.join(process.cwd(), "./public/assets/images/saved/");

// Ensure the directory exists
await mkdir(saveDirectory, { recursive: true });

const responses = await Promise.all(files.map(async (file) => {
    if (!allowedTypes.includes(file.type)) {
        return { error: `File type ${file.type} is not allowed.` };
    }

    if (file.size > maxFileSize) {
        return { error: `File size for ${file.name} exceeds the limit of 5MB.` };
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Generate a datetime string for uniqueness
    const date = new Date();
    const dateTimeFormat = date.toISOString().replace(/[^a-z0-9]/gi, '_').toLowerCase();

    // Extract file name and extension
    const originalName = path.basename(file.name, path.extname(file.name)).replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const extension = path.extname(file.name);
    // Construct the new filename with datetime before the extension
    const sanitizedFileName = `${originalName}_${dateTimeFormat}${extension}`;
    const filePath = path.join(saveDirectory, sanitizedFileName);

    try {
        await writeFile(filePath, buffer);
        return { status: "saved", file: filePath };
    } catch (error) {
        return { error: `Failed to save file ${file.name}: ${error.message}` };
    }
}));

// Filter out successful responses and errors
const savedFiles = responses.filter(response => response.status);
const errors = responses.filter(response => response.error);

if (savedFiles.length > 0) {

    try {
        const data = axios.post("http://localhost:8000/api/v1/admin/create-category", reqBody);
        return NextResponse.json({ success: "file data saved", files: data, errors });
    } catch (err) {
        console.log(err)
    }

    return NextResponse.json({ success: true, files: savedFiles, errors });
} else {
    return NextResponse.json({ success: false, message: "No files saved", errors });
}