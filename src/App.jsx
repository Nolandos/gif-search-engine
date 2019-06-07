import React from 'react';
import './App.scss';

import Search from './components/Search/Search.jsx';

function App() {
  return (
    <div className="App">
      <h1>Wyszukiwarka gifów</h1>
      <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
      <Search />
    </div>
  );
}

export default App;
