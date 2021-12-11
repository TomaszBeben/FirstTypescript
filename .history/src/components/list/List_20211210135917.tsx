import React, {FC, useState } from 'react'

type mockApi = [
    {
        user: 'test1',
        userId: 1,
    },
    {
        user: 'test2',
        userId: 2,
    },
    {
        user: 'test3',
        userId: 3,
    },
    {
        user: 'test4',
        userId: 4,
    },
];

type ListComponentsProps = {
    users: mockApi
}

const List: FC<ListComponentsProps> = ({users}) => {

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