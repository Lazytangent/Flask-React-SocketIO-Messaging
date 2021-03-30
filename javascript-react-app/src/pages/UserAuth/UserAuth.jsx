import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { login, signUp } from '../../store/session';
import FormHeader from '../../components/FormHeader';
import FormErrors from '../../components/FormErrors';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const UserAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const submitHandler = (e) => {
    e.preventDefault();
    let user;
    if (location.pathname === '/login') {
      user = await dispatch(login(credential, password));
    } else {
      user = await dispatch(signUp(username, email, password, confirmPassword));
    }
    if (user.errors) {
      setErrors(user.errors);
    }
  };

  if (location.pathname === '/login') {
    return (
      <form onSubmit={submitHandler}>
        <FormHeader heading='Login' />
        <FormErrors errors={errors} />
        <FormField type='text' name='credential' placeholder='Username or Email' required={true} value={credential} onChange={updateCredential} />
        <FormField type='password' name='password' placeholder='Password' required={true} value={password} onChange={updatePassword} />
        <Button label="Login" />
      </form>
    )
  } else if (location.pathname === '/signup') {
    return (
      <form onSubmit={submitHandler}>
        <FormHeader heading='Signup' />
        <FormErrors errors={errors} />
        <FormField type='text' name='username' placeholder='Username' required={true} value={username} onChange={updateUsername} />
        <FormField type='email' name='email' placeholder='Email' required={true} value={email} onChange={updateEmail} />
        <FormField type='password' name='password' placeholder='Password' required={true} value={password} onChange={updatePassword} />
        <FormField type='password' name='confirmPassword' placeholder='Confirm Password' required={true} value={confirmPassword} onChange={updateConfirmPassword} />
        <Button label="Signup" />
      </form>
    )
  }
};

export default UserAuth;
