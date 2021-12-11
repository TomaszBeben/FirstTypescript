import React, {FC} from 'react'

type UserType = {
    user: string,
    userId: number,
}

const List: FC<UserType> = ({user, userId}) => {
    
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