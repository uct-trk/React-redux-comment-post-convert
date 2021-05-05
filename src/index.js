import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { reducer } from './components/reducers';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

