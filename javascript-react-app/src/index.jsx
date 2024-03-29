import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store';
import UserProvider from './context/UserContext';

import * as sessionActions from './store/session';
import * as messageActions from './store/messages';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.sessionActions = sessionActions;
  window.messageActions = messageActions;
}

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <UserProvider>
        <App />
      </UserProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
