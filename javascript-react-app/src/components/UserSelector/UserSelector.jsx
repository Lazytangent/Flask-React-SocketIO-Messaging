import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './UserSelector.module.css';
import { getUsers } from '../../store/users';
import {
  setConverationUser,
  removeConversationUser,
  useUserContext,
} from '../../context/UserContext';

const UserSelector = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));

  const { userState, userDispatch } = useUserContext();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userClick = (user) => {
    userDispatch(setConverationUser(user));
  };

  return (
    <>
      <h3>Placeholder for UserSelector</h3>
      {users.map((user) => (
        <button onClick={() => userClick(user)} className={styles.userHeading} type="button">{user.username}</button>
      ))}
    </>
  );
};

export default UserSelector;
