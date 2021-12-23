import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { fetchData } from './api/fetchData'

import Header from './components/header/Header'
import Search from './components/search/Search'
// import Posts from './components/posts/Posts'

import { TUser } from './types/TUser'



const App = () => {

  const defaultState: TUser[] = [];
  const [users, setUsers] = useState < TUser[] > (defaultState)
  const [error, setError] = useState < string > ('')
  const [search, setSearch]: [string, Dispatch<SetStateAction<string>>] = useState ('')

  useEffect(() => {
    fetchData(setUsers, setError);
  }, [])

  const filterUser = (search: string, elem: TUser) => {
    if(search === ''){
      return elem
    }else if(elem.name.toLowerCase().includes(search.toLowerCase())){
      return elem
    }
  }
// heplfull note:
//
//   const filterPosts = (posts, query) => {
//     if (!query) {
//         return posts;
//     }

//     return posts.filter((post) => {
//         const postName = post.name.toLowerCase();
//         return postName.includes(query);
//     });
// };

  return (
    <div className='App'>
      <Header />
      <Search search={search} setSearch={setSearch} />
      {users.filter((elem: TUser) => {
        console.log(search === '');
          console.log(elem.name.toLowerCase().includes(search.toLowerCase()));
        if(search === ''){
          return elem
        }else if (elem.name.toLowerCase().includes(search.toLowerCase())){
          return elem
        }
        return false

        // if should be a function which return value (? with arg elem?)

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
      {/* should shows 'string' */}
    </div>
  )
}

export default App
