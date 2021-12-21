import React, {FC, useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/header/Header'
import Search from './components/search/Search'
// import Posts from './components/posts/Posts'

type TUser = {
  id: number,
  name: string,
  username: string,
}

const App: FC = () => {
  const [users, setUsers] = useState<TUser[] | string>('default')
  console.log(users);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios.get<TUser[]>(url)
    .then(({data}) => {
      setUsers(data)
    })
  },[])

  return (
    <div className='App'>
      <Header/>
      <Search/>
      {users}
    </div>
  )
}

export default App
