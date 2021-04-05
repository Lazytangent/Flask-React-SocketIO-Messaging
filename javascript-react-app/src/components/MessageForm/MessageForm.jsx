import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './MessageForm.module.css';
import {
  initiateSocket,
  disconnectSocket,
  subscribeToChat,
  sendMessage,
} from '../../socketIO';
import { receiveMessage } from '../../store/messages';
import { useUserContext } from '../../context/UserContext';
import FormField from '../FormField';
import FormErrors from '../FormErrors';
import Button from '../Button';

const MessageForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [socket, setSocket] = useState();

  const { userState } = useUserContext();

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
    const data = {
      body: message,
      sender_id: user.id,
      recipient_id: userState.user.id,
    };
    sendMessage(data);
  };

  if (!(user && userState.user)) {
    return null;
  }

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
