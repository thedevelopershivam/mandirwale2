import axios from 'axios';
import { headers } from 'next/headers'


// Create an instance of axios with custom configurations
const instance = axios.create({
    baseURL: 'http://localhost:8000/api/v1/admin/',
});


// Add a request interceptor
instance.interceptors.request.use(async (config) => {



    const headersList = new headers()
    const token = headersList?.get("cookie").replace("token=", "");
    config.data = { ...config.data, userId: token };
    config.headers.authorization = `Bearer ${token}`;

    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
    return response;
},
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
