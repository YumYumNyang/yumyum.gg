import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import './App.css';
import Header from './components/Header'
import SearchUser from './features/SearchUser/index'


const store = createStore(); 

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
          <Header/>
          <SearchUser/>
      </div>
    </Provider>
    
  );
}

export default App;
