import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './MessageForm.module.css';
import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from '../../socketIO';
import { receiveMessage } from '../../store/messages';
import FormField from '../FormField';
import FormErrors from '../FormErrors';
import Button from '../Button';

const MessageForm = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (!socket) {
      setSocket(initiateSocket());
      subscribeToChat((err, data) => {
        if (err) setErrors(err);
        console.log(data);
        dispatch(receiveMessage(data));
      });
      return () => {
        disconnectSocket();
        setSocket();
      };
    }
    return null;
  }, []);

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <FormErrors errors={errors} />
      <FormField
        type="text"
        name="message"
        placeholder="Write a message..."
        required
        value={message}
        onChange={updateMessage}
      />
      <Button label="Send" />
    </form>
  );
};

export default MessageForm;
