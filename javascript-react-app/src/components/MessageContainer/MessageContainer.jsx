import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMessages } from '../../store/messages';
import {
  useUserContext,
} from '../../context/UserContext';
import styles from './MessageContainer.module.css';
import Message from '../Message';

const MessageContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const messages = useSelector((state) => state.messages.messages);

  const { userState } = useUserContext();

  useEffect(() => {
    if (user && userState.user) {
      dispatch(getMessages(user.id, userState.user.id));
    }
  }, [user, dispatch, userState]);

  return (
    <div className={styles.div}>
      {Object.values(messages).map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageContainer;
