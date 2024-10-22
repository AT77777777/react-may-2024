import axios from "axios";
import {IUser} from "../models/IUser";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

axiosInstance.interceptors.request.use((request) => {
    if (request.method === 'get') {
        request.headers.set('Content-Type', 'application/json')
    }

    return request;
})

export const getUsers = async () => {
    let axiosResponse = await axiosInstance.get<IUser>('/users');
    return axiosResponse.data;
}