import axios, { Axios, AxiosError, AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
})

export default axiosInstance