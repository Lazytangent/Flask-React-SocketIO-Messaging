import React from 'react';
import PropTypes from 'prop-types';

import styles from './Message.module.css';

const Message = ({ message }) => (
  <div className={styles.div}>
    <p>{message.body}</p>
    <hr />
    <p>{message.sender.username}</p>
    <p>{message.created_at}</p>
  </div>
);

Message.defaultProps = {
  message: {
    body: '',
    sender: {
      id: 1,
      username: '',
      email: '',
    },
    recipient: {
      id: 2,
      username: '',
      email: '',
    },
    created_at: '',
  },
};

Message.propTypes = {
  message: PropTypes.shape({
    body: PropTypes.string,
    sender: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      email: PropTypes.string,
    }),
    recipient: PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      email: PropTypes.string,
    }),
    created_at: PropTypes.string,
  }),
};

export default Message;
