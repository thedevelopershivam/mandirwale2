import axios from 'axios';


// Create an instance of axios with custom configurations
const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/admin',
    // You can set common headers or other configurations here
});

// Function to set up Axios interceptors
export function setupInterceptors(req) {
    // Retrieve the token from cookies
    const token = req.cookies.token; // Assuming you have a cookie named "token"

    // Add a request interceptor
    instance.interceptors.request.use(
        (config) => {
            // If the token exists, add it to the headers
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Add a response interceptor
    instance.interceptors.response.use((response) => {

        try {
            return response.NextResponse.json({ start: "here you are" });
        } catch (err) { console.log(err) }

        return response;
    },
        (error) => {
            return Promise.reject(error);
        }
    );

}

export default instance;