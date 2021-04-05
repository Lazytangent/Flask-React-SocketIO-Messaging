import React from 'react';

import MessageContainer from '../../components/MessageContainer';
import MessageForm from '../../components/MessageForm';
import UserSelector from '../../components/UserSelector';

const Messenger = () => (
  <>
    <UserSelector />
    <MessageForm />
    <MessageContainer />
  </>
);

export default Messenger;
