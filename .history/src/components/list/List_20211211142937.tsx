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

    return (
        <ul>
            elo
        </ul>
    )
};

export default List