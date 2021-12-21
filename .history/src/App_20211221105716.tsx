import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import Test from './Test';

import { TPosts, fetchData } from './api/fetchData'

const defaultPosts: TPosts[] = [];

const App = () => {
  const [posts, setPosts]

  useEffect(() => {
  }, [])

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List/>
      
    </div>
  );
}

export default App;
