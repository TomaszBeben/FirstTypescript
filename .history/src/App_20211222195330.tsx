import React, { FC, useState, useEffect } from 'react'
import { fetchData } from './api/fetchData'

import Header from './components/header/Header'
import Search from './components/search/Search'
import Posts from './components/posts/Posts'

import { TUser } from './types/TUser'



const App: FC = () => {
  const defaultState: TUser[] = [];
  const [users, setUsers] = useState < TUser[] > (defaultState)
  const [error, setError] = useState < string > ('')
  const [search, setSearch] = useState < string > ('')

  useEffect(() => {
    fetchData(setUsers, setError);
  }, [])
  return (
    <div className='App'>
      <Header />
      {/* <Search /> */}
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      {search}
      {users.filter((elem: TUser) => {
        if(search === ''){
          return elem
        }else if (elem.name.toLowerCase().includes(search.toLowerCase())){
          return elem
        }
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
