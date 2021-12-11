import React from 'react'
import axios from 'axios';

type Post = {
    id:
    name
    username
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