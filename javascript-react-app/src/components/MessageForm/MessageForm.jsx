import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './MessageForm.module.css';
import { sendMessage } from '../../store/messages';
import FormField from '../FormField';
import FormErrors from '../FormErrors';
import Button from '../Button';

const MessageForm = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const response = await dispatch(sendMessage({ message, }));
    if (response.errors) {
      setErrors(response.errors);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <FormField type='text' name='message' placeholder='Write a message...' required={true} value={message} onChange={updateMessage} />
      <Button label='Send' />
    </form>
  );
};

export default MessageForm;
