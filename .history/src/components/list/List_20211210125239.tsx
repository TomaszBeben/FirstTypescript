import React from 'react'

const List = () => {

    const [users, setUsers] = useState()

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