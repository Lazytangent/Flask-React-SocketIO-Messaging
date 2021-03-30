import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import UserAuth from './components/UserAuth';
import Messenger from './components/Messenger';

import { authenticate } from './store/session';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/" exact>
        <Messenger />
      </Route>
      <Route path="/login">
        <UserAuth />
      </Route>
      <Route path="/signup">
        <UserAuth />
      </Route>
    </Switch>
  );
};

export default App;
