import React,{ useState } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import {TPosts} from './api/fetchData'

const defaultPosts: TPosts[] = [];

const App = () => {
  const [posts, setPosts]: [TPosts[], (posts: TPosts[]) => void] = useState(defaultPosts);

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <List />
    </div>
  );
}

export default App;
