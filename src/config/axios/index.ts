import axios, { InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 150000,
})

const reqInterceptor = (config: InternalAxiosRequestConfig) => {
    // Do something before request is sent
    // mengambil token yg disimpan di localstorage
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config;
}

axios.interceptors.request.use(reqInterceptor)

export {axiosInstance};