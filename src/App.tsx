import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';

import { getUsers } from './api/axios'

const App = () => {

  const api = getUsers();
  console.log(api);

  return (
    <div className='App'>
      <Header/>
      <SearchBar/>
      <List/>
    </div>
  );
}

export default App;
