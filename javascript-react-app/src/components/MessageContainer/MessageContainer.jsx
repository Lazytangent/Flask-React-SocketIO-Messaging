import React from 'react';
import { useSelector } from 'react-redux'

import styles from './MessageContainer.module.css';
import Message from '../Message';

const MessageContainer = () => {
  const messages = useSelector((state) => state.messages.messages);

  return (
    <div className={styles.div}>
      {Object.values(messages).map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default MessageContainer;
