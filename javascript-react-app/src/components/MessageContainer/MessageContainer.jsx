import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMessages } from '../../store/messages';
import styles from './MessageContainer.module.css';
import Message from '../Message';

const MessageContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const messages = useSelector((state) => state.messages.messages);

  useEffect(() => {
    if (user) {
      dispatch(getMessages(user.id));
    }
  }, [user, dispatch]);

  return (
    <div className={styles.div}>
      {Object.values(messages).map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
};

export default MessageContainer;
