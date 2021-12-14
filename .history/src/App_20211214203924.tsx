import React,{ useState } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import {Posts} from './api/fetchData'

const App = () => {
  const [posts, setPosts]: [Posts[], (posts: Posts[]) => void] = useState(defaultPosts);

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <List />
    </div>
  );
}

export default App;
