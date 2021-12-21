import React, { useState, useEffect } from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import Test from './Test';

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

  const filterByName = (elem: {}) => {
    if(search === ''){
      return elem
    }else if(elem.name.toLowerCase().includes(search.toLowerCase())){
      return elem
    }
}
console.log(filterByName(posts));

//Type 'TPosts' is missing the following properties from type 'TPosts[]': length, pop, push, concat, and 28 more.  TS2345
  return (
    <div className='App'>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <List posts={ posts } error={error} />
      <Test />
    </div>
  );
}

export default App;
