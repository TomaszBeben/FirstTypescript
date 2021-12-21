import React, { useState } from 'react'

import Header from './components/header/Header'
import Search from './components/search/Search'
// import Posts from './components/posts/Posts'

type TUser = {
  id: number,
  name: string,
  username: string,
}

const App = () => {
  const [users, setUsers] = useState<TUser[] | string>('default')
  console.log(users);

  return (
    <div className='App'>
      <Header/>
      <Search/>
    </div>
  )
}

export default App
