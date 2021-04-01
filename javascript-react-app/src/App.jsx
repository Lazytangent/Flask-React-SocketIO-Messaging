import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import UserAuth from './pages/UserAuth';
import Messenger from './pages/Messenger';

import { authenticate } from './store/session';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          {user ? <Messenger /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <UserAuth />
        </Route>
        <Route path="/signup">
          <UserAuth />
        </Route>
      </Switch>
    </>
  );
};

export default App;
