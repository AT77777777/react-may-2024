import {IPost} from "./IPost";

export interface IPostsResponse {
    posts: IPost[],
    skip: number,
    limit: number,
    total: number
}