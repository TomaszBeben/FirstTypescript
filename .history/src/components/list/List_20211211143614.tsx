import React, { useState, useEffect } from 'react'
import axios from 'axios';

type Posts = {
    id: number;
    name: String;
    username: String;
}
const defaultPosts: Posts[] = [];

const List = () => {
    const [posts, setPosts]: [Posts[], (posts: Posts[]) => void] = useState(defaultPosts);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    useEffect(() => {
        axios.get<Posts[]>('https://jsonplaceholder.typicode.com/users');
        .then(res => {
            setPosts(res.data);
            setLoading(false);
        })
    },[])

    return (
        <ul>
            elo
        </ul>
    )
};

export default List