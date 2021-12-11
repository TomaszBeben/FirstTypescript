import {FC, useState, useEffect, Dispatch } from 'react';

import axios from 'axios';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

// import { fetchData } from './api/axios'

// type props = {
//   url: string;
//   setState?: Dispatch<React.SetStateAction<[{}]>>
// }

const App = () => {

  const [users, setUsers] = useState()
  // // const url: string = 'https://jsonplaceholder.typicode.com/users';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios({
  //       method: 'GET',
  //       url: 'https://jsonplaceholder.typicode.com/users',
  //     }).then(res => {
  //       setUsers(res.data)
  //     }).catch(e => {
  //       console.error(e.message);
  //     })
  //   }
  // }, [])


  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <List users={users} />
    </div>
  );
}

export default App;
