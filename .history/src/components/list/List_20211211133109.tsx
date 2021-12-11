import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Interface } from 'readline';

Interface Post {
    id: Number;
    name: String;
    username: String;
}

const List = () => {
    const [users, setUsers] = useState<Post[]>([]);
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