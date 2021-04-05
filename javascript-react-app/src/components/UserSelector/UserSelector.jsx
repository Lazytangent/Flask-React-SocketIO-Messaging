import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUsers } from '../../store/users';

const UserSelector = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => Object.values(state.users));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h3>Placeholder for UserSelector</h3>
      {users.map((user) => (
        <h3>{user.username}</h3>
      ))}
    </>
  );
};

export default UserSelector;
