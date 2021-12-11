import React, { useState, useEffect } from 'react'
import axios from 'axios';

type Post = {
    id: Number;
    name: String;
    username: String;
}

const defaultPost: Post[] = [];

const List = () => {
    const [users, setUsers] = 
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