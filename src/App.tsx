import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {IPost} from "./models/IPost";
import {getAllPostsByUserId} from "./services/api.service";

function App() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const lift = async (id: number) => {
        setPosts(await getAllPostsByUserId(id));
    };

    return (
        <div>
            <Users lift={lift} />
            <Posts  posts={posts}/>
        </div>
    );
}

export default App;
