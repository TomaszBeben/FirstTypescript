import { FC } from 'react'
import { TPosts } from '../../api/fetchData';

import { ListProps } from './ListProps';

const List: FC<ListProps> = ({posts, error}) => {

    return (
        <div>
        <ul>
            {posts !== undefined ? posts.map((elem<undefined!>) => (
                <li style={{ display:'flex', flexDirection:'row' }} key={elem.id}>
                    <p>{elem.id}</p>
                    <h1>{elem.name}</h1>
                    <p>{'@' + elem.username}</p>
                </li>
            )): 'no data here'}
        </ul>
        {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    )
};

export default List