import React, { useState, useEffect } from 'react'
import axios from 'axios';

type Post = {
    id: number;
    name: String;
    username: String;
}

const List = () => {
    const [posts, setPosts]: [Post[], (posts: Post[]) => void] = useState([]);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
    const [error, setError]: [string, (error: string) => void] = useState("");

    setError(1);
    console.log(error);
    return (
        <ul>
            <li style={{display: 'flex', flexDirection: 'row'}}>
                <p>1.</p>
                <h1>tomek</h1>
                <p>@tbeben</p>
            </li>
            <li style={{display: 'flex', flexDirection: 'row'}}>
                <p>1.</p>
                <h1>tomek</h1>
                <p>@tbeben</p>
            </li>
            <li style={{display: 'flex', flexDirection: 'row'}}>
                <p>1.</p>
                <h1>tomek</h1>
                <p>@tbeben</p>
            </li>
        </ul>
    )
};

export default List