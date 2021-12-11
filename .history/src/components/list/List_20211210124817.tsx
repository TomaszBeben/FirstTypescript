import React, {FC} from 'react'

type UserType = {
    user: {};
}

const List: FC<UserType> = ({user}) => {

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