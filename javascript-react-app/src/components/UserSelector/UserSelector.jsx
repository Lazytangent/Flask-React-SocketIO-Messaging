import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './UserSelector.module.css';
import { getUsers } from '../../store/users';
import {
  setConverationUser,
  useUserContext,
} from '../../context/UserContext';

const UserSelector = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));

  const { userDispatch } = useUserContext();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const userClick = (user) => {
    userDispatch(setConverationUser(user));
  };

  return (
    <>
      <h3 className={styles.heading}>Select a User to Message</h3>
      <div className={styles.usersDiv}>
        {users.map((user) => (
          <button key={user.id} onClick={() => userClick(user)} className={styles.userHeading} type="button">{user.username}</button>
        ))}
      </div>
    </>
  );
};

export default UserSelector;
