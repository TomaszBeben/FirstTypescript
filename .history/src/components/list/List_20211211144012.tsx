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
        axios
        .get<Posts[]>('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setPosts(res.data);
            setLoading(false);
        })
        .catch(err => {
            const error = err.res.status === 404
            ?  "Resource Not found"
            : "An unexpected error has occurred";
            setError(error);
            setLoading(false)
        })
    },[])

    console.log(posts);

    return (
        <ul>
            elo
        </ul>
    )
};

export default List