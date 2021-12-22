import React, { FC, useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/header/Header'
// import Search from './components/search/Search'
// import Posts from './components/posts/Posts'

type TUser = {
  id: number,
  name: string,
  username: string,
}

const defaultState: TUser[] = [];

const App: FC = () => {
  const [users, setUsers] = useState < TUser[] > (defaultState)
  const [error, setError] = useState < string > ('')
  const [search, setSearch] = useState < string > ('')
  console.log(users);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get < TUser[] > (url)
      .then(({ data }) => {
        setUsers(data)
        setError('')
      })
      .catch((err) => {
        err.response.status === 404
        ? setError('resources not found')
        : setError('')
      })
  }, [])
  return (
    <div className='App'>
      <Header />
      {/* <Search /> */}
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {search}
      {users.filter((elem: TUser) => {
        if(search === ''){
          // setError('')
          return elem
        }else if (elem.name.toLowerCase().includes(search.toLowerCase())){
          // setError('')
          return elem
        }
        // setError('no records')
        return false
      }).map((elem) => {
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
      {error}
    </div>
  )
}

export default App
