import {useState } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

// import { fetchData } from './api/axios'

const mockApi = [
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
]

const App = () => {
  const [users, setUsers] = useState<{}>(mockApi)

  console.log(users);

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List users= {user}/>
    </div>
  );
}

export default App;
