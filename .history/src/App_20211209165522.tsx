import {useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import { getUsers } from './api/axios'


const App = () => {
  let api = getUsers();
  const [users, setUsers] = useState(api)
  
  console.log(users);
  
  useEffect(() => {
    api = getUsers()

  })

  console.log(users);

  return (
    <div className='App'>
      {api}
      <Header/>
      <SearchBar/>
      <List/>
    </div>
  );
}

export default App;
