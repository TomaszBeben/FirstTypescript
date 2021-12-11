import {useState, useEffect } from 'react';

import axios from 'axios';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

// import { fetchData } from './api/axios'



const App = () => {
  const [users, setUsers] = useState()

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List users={users} />
    </div>
  );
}

export default App;
