import axios from "axios";

const http = axios.create({
    baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
    timeout: 15000
});

http.interceptors.request.use((config) => {
    // config.baseURL("http://baidu.com")
    return config;
});

// 响应拦截器(收到响应，没有收到响应)

http.interceptors.response.use((response) => {
    return response.data;
});

export default http;
