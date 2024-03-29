import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Redirect } from 'react-router-dom';

import styles from './UserAuth.module.css';
import { login, signUp } from '../../store/session';
import FormHeader from '../../components/FormHeader';
import FormErrors from '../../components/FormErrors';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const UserAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const updateCredential = (e) => {
    setCredential(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let userData;
    if (location.pathname === '/login') {
      userData = dispatch(login(credential, password));
    } else {
      userData = dispatch(
        signUp(username, email, password, confirmPassword),
      );
    }
    if (userData.errors) {
      setErrors(userData.errors);
    }
  };

  if (user) {
    return <Redirect to="/" />;
  }

  if (location.pathname === '/login') {
    return (
      <form onSubmit={submitHandler} className={styles.form}>
        <FormHeader heading="Login" />
        <FormErrors errors={errors} />
        <FormField
          type="text"
          name="credential"
          placeholder="Username or Email"
          required
          value={credential}
          onChange={updateCredential}
        />
        <FormField
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={updatePassword}
        />
        <Button label="Login" />
      </form>
    );
  }
  return (
    <form onSubmit={submitHandler}>
      <FormHeader heading="Signup" />
      <FormErrors errors={errors} />
      <FormField
        type="text"
        name="username"
        placeholder="Username"
        required
        value={username}
        onChange={updateUsername}
      />
      <FormField
        type="email"
        name="email"
        placeholder="Email"
        required
        value={email}
        onChange={updateEmail}
      />
      <FormField
        type="password"
        name="password"
        placeholder="Password"
        required
        value={password}
        onChange={updatePassword}
      />
      <FormField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        required
        value={confirmPassword}
        onChange={updateConfirmPassword}
      />
      <Button label="Signup" />
    </form>
  );
};

export default UserAuth;
