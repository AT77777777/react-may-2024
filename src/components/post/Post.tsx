import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type PostProps = {
    post: IPost;
}

const Post: FC<PostProps> = ({post}) => {
    return (
        <div>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.body}
            </p>
        </div>
    );
};

export default Post;