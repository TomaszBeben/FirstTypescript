import React from 'react'

const List = () => {

    return (
        <ul>
            {user.map((elem) => (
                <li>
                    {elem.user}
                    {elem.userId}
                </li>
            ))}
        </ul>
    )
}

export default List