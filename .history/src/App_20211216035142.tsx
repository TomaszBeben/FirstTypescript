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
  const [search, setSearch]: [string, (search: string) => void] = useState('')


  useEffect(() => {
    fetchData(setPosts, setLoading, setError)
  }, [])
  useEffect(() => {
    posts.filter(elem => {
      if(search === '') {
        setPosts(elem)
      }else if (elem.name.toLowerCase().includes(search.toLowerCase())){
        return elem;
      }
    })
  })


  return (
    <div className='App'>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <List posts={ posts } error={error} />
    </div>
  );
}

export default App;
