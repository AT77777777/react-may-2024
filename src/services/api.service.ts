import axios from "axios";
import {IUsersResponse} from "../models/IUsersResponse";
import {IPostsResponse} from "../models/IPostsResponse";
import {IPost} from "../models/IPost";

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
    let axiosResponse = await axiosInstance.get<IUsersResponse>('/users');
    return axiosResponse.data.users;
}

export const getAllPostsByUserId = async (id: number): Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<IPostsResponse>('/posts/user/' + id);
    return axiosResponse.data.posts;
}