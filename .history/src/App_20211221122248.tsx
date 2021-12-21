import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/header/Header'
import Search from './components/search/Search'
// import Posts from './components/posts/Posts'

type TUser = {
  id: number,
  name: string,
  username: string,
  // email: string,
  // address: object,
  // phone: string,
  // website: string,
  // company: string,
}

const defaultState: TUser[] = [];

const App: FC = () => {
  const [users, setUsers] = useState < TUser[] > (defaultState)
  const [error, setError] = useState < string > ('')
  console.log(users);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/uers';
    axios.get < TUser[] > (url)
      .then(({ data }) => {
        setUsers(data)
      })
    catch ((err))
}, [])

return (
  <div className='App'>
    <Header />
    <Search />
    {users.map((elem) => {
      return (
        <ul key={elem.id}>
          <li>
            <p>{elem.id}</p>
            <p>{elem.name}</p>
            <p>{elem.username}</p>
          </li>
        </ul>
      )
    })
    }

  </div>
)
}

export default App
