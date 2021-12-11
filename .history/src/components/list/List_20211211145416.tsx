import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TIMEOUT } from 'dns';

type Posts = {
    id: number;
    name: String;
    username: String;
}
const defaultPosts: Posts[] = [];

const List = () => {
    const [posts, setPosts]: [Posts[], (posts: Posts[]) => void] = useState(defaultPosts);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
    const [error, setError]: [string, (error: string) => void] = useState('');

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
        <div>
        <ul>
            {posts.map((elem, key) => (
                <li style={{ display:'flex', flexDirection:'row' }} key={elem.id}>
                    <p>{elem.id}</p>
                    <h1>{elem.name}</h1>
                    <p>{'@' + elem.username}</p>
                </li>
            ))}
        </ul>
        {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    )
};

export default List