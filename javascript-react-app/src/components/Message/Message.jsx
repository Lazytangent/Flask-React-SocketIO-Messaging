import React from 'react';

import styles from './Message.module.css';

const Message = ({ message }) => (
  <div className={styles.div}>
    <p>{message.body}</p>
    <hr />
    <p>{message.sender}</p>
    <p>{message.created_at}</p>
  </div>
);

export default Message;
