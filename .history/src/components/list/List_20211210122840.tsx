import React, {FC} from 'react'

type UserType = {
    user: string,
    userId: number,
}

const List: FC<UserType> = ({user}) => {
    
    return (
        <ul>
            {user.map((elem) => (
                <li>
                    {elem}
                </li>
            ))}
        </ul>
    )
}

export default List