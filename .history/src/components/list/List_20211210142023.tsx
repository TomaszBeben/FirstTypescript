import React, {FC, useState } from 'react'



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