import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Interface } from 'readline';

type Post = {
    id: Number;
    name: String;
    username: String;
}

const defaultPosts: Post[] = [];

const List = () => {
    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
    const [error, setError]: [string, (error: string) => void] = useState("");
    return (
        <ul>
            {users.map((elem: { user, userId }) => (
                <li>
                    {`user: ${elem.user} id: ${elem.userId}`}
                </li>
            ))}
        </ul>
    )
};

export default List