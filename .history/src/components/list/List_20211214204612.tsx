import {FC, useState, useEffect } from 'react'
import {TPosts, fetchData} from '../../api/fetchData'

type ListProps = {
    posts: TPosts[];
    setPosts: (posts: TPosts[]) => void
}

const defaultPosts: TPosts[] = [];

const List: FC<ListProps> = ({posts, setPosts}) => {
    

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