import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import { getUsers } from './api/axios'
import { useEffect } from 'react';

const App = () => {
  let api = getUsers();
  useEffect(() => {
    api = getUsers()
  }
  )
  

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List/>
    </div>
  );
}

export default App;
