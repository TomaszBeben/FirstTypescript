import { FC } from 'react'

import { ListProps } from './ListProps';

const List: FC<ListProps> = ({posts, setPosts, error, setError}) => {

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