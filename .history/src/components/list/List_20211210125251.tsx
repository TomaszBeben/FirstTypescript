import React from 'react'

const mockApi = [
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
  ]

const List = () => {

    const [users, setUsers] = useState(mockApi)

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