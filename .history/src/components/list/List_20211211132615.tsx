import React, { useState, useEffect } from 'react'
import axios from 'axios';

type Post = {
    id: Number;
    name: String;
    username: String;
}



const List = () => {
    const defaultPost: Post = [];
    const [users, setUsers]: [Post, ] = useState<Post>(defaultPost);
    const [posts, setPosts]: [Post[], (posts: Post[]) => void] = useState(defaultPosts)
    return (
        <ul>
            {users.map((elem: {user, userId}) => (
                <li>
                    {`user: ${elem.user} id: ${elem.userId}`}
                </li>
            ))}
        </ul>
    )
};

export default List