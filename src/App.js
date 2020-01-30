import React from 'react';
import './App.css';
import {UserContainer} from './components';
import {default as store} from './redux/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
