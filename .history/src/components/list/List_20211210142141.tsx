import React from 'react'
import axios from 'axios';

type Post = {
    
}

const List = () => {

    return (
        <ul>
            {users.map((elem: {user, userId}) => (
                <li>
                    {`user: ${elem.user} id: ${elem.userId}`}
                </li>
            ))}
        </ul>
    )
};

export default List