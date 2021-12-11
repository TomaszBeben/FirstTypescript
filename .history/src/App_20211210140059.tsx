import {FC, useState, useEffect, Dispatch } from 'react';

import axios from 'axios';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

type mockApi = [
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
];

type ListComponentsProps = {
  users: mockApi
}

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
      <List users={users<ListComponentsProps>} />
    </div>
  );
}

export default App;
