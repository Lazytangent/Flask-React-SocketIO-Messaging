import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import FormHeader from '../../components/FormHeader';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const UserAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const updateCredential = (e) => {
    setCredential(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  if (location.pathname === '/login') {
    return (
      <>
        <FormHeader heading='Login' />
        <FormField type='text' name='credential' placeholder='Username or Email' required={true} value={credential} onChange={updateCredential} />
        <FormField type='password' name='password' placeholder='Password' required={true} value={password} onChange={updatePassword} />
        <Button label="Login" />
      </>
    )
  }

};

export default UserAuth;
