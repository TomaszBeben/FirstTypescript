import React, { useState, useEffect } from 'react'
import axios from 'axios';

type Post = {
    id: number;
    name: String;
    username: String;
}

const defaultPosts: Post[] = [];

const List = () => {
    const [posts, setPosts]: [Post[], (posts: Post[]) => void] = useState(defaultPosts);
    // const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
    // const [error, setError]: [string, (error: string) => void] = useState("");
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