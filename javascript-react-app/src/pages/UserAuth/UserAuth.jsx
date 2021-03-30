import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

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
  };

  if (location.pathname === '/login') {
    return (
      <>
        <FormHeader heading='Login' />
        <FormErrors errors={errors} />
        <FormField type='text' name='credential' placeholder='Username or Email' required={true} value={credential} onChange={updateCredential} />
        <FormField type='password' name='password' placeholder='Password' required={true} value={password} onChange={updatePassword} />
        <Button label="Login" />
      </>
    )
  } else if (location.pathname === '/signup') {
    return (
      <>
        <FormHeader heading='Signup' />
        <FormErrors errors={errors} />
        <FormField type='text' name='username' placeholder='Username' required={true} value={username} onChange={updateUsername} />
        <FormField type='email' name='email' placeholder='Email' required={true} value={email} onChange={updateEmail} />
        <FormField type='password' name='password' placeholder='Password' required={true} value={password} onChange={updatePassword} />
        <FormField type='password' name='confirmPassword' placeholder='Confirm Password' required={true} value={confirmPassword} onChange={updateConfirmPassword} />
        <Button label="Signup" />
      </>
    )
  }
};

export default UserAuth;
