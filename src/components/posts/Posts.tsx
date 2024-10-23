import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import Post from "../post/Post";

type PostsProps = {
    posts: IPost[];
}

const Posts: FC<PostsProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post} />)
            }
        </div>
    );
};

export default Posts;