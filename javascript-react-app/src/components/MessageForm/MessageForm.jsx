import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './MessageForm.module.css';
import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
} from '../../socketIO';
import { sendMessage } from '../../store/messages';
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
        if (err) return;
        console.log(data);
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
    const response = dispatch(sendMessage(socket, { message }));
    if (response.errors) {
      setErrors(response.errors);
    }
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
