import axios from 'axios';
import { headers } from 'next/headers';


// Create an Axios instance
const axiosInstance = axios.create({
});

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
    console.log(config.data);
    const headersList = headers()
    const token = headersList.get("cookie").replace("token=", "");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.jwt = `${token}`;
        // config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});



axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axiosInstance;
