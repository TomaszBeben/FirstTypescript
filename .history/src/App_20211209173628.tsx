import {useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import { fetchData } from './api/axios'


const App = () => {
  const [users, setUsers] = useState()
  // console.log(users);
  console.log(fetchData);
  useEffect(() => {
  })

  console.log(users);

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List/>
    </div>
  );
}

export default App;
