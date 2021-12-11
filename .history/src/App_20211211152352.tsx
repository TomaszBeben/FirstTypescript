import React from 'react';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

const App = () => {

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <List />
    </div>
  );
}

export default App;
