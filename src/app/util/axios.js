import axios from 'axios';
import Cookies from "js-cookie";
import { NextResponse } from 'next/server';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/admin"
});

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    console.log({ token })
    if (token && token !== "" && token !== undefined) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
});

axiosInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        let response = NextResponse.next()
        console.log(error?.response?.data);
        if (
            error?.response?.data?.errors === "You are not authorise person to perform this action!"
            || error?.response?.data?.errors === "You are not authorise person for view this page!"
            || error?.response?.data?.errors === "Your recently changed password, login again pls"
        ) {

            alert(error?.response?.data?.errors);
            Cookies.remove('Authorization', { path: '/', secure: true })
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
        return Promise.reject(error?.data?.data);
    }
);

export default axiosInstance;
