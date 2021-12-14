import { useState, useEffect } from 'react'
import {TPosts, fetchData} from '../../api/fetchData'

const defaultPosts: TPosts[] = [];

const List = () => {
    const [posts, setPosts]: [TPosts[], (posts: TPosts[]) => void] = useState(defaultPosts);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
    const [error, setError]: [string, (error: string) => void] = useState('');

    useEffect(() => {
        fetchData(setPosts, setLoading, setError)
    },[])

    console.log(posts);

    return (
        <div>
        <ul>
            {posts.map((elem) => (
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