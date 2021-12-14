import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import { TPosts, fetchData } from './api/fetchData'

const defaultPosts: TPosts[] = [];

const App = () => {
  const [posts, setPosts]: [TPosts[], (posts: TPosts[]) => void] = useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState < boolean > (true);
  const [error, setError]: [string, (error: string) => void] = useState('');


  useEffect(() => {
    fetchData(setPosts, setLoading, setError)
  }, [])

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <List posts={ posts } error={error} />
    </div>
  );
}

export default App;
