import {useState, useEffect } from 'react';

import axios from 'axios';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

// import { fetchData } from './api/axios'



const App = () => {
  const [users, setUsers] = useState()
  const url = 'https://jsonplaceholder.typicode.com/users';

  const fetchData = async (url) => {
    axios({
      method: 'GET',
      url: url,
    }).then(res => {
      setState(res.data)
    }).catch(e => {
      console.error(e.message);
    })
  }

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List users={users} />
    </div>
  );
}

export default App;
