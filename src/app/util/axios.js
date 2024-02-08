import axios from 'axios';
import { headers } from 'next/headers';


// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/admin/', // Your API base URL
});

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
    const headersList = new headers()
    const token = headersList?.get("cookie").replace("token=", "");

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosInstance;
