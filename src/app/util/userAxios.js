import axios from 'axios';

const userInstance = axios.create({
    baseURL: "http://localhost:8000/api/v1/user"
});

userInstance.interceptors.request.use(function (config) {
    return config
});

userInstance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error?.data?.data);
    }
);

export default userInstance;
