import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const UsersReducer = (state, action) => {

};

const initialState = {
  currentUser: null,
};

const UsersContext = createContext();

export const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
  const [usersState, dispatch] = useReducer(UsersReducer, initialState);
  return (
    <UsersContext.Provider value={{ usersState, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.defaultProps = {
  children: null,
};

UsersProvider.propTypes = {
  children: PropTypes.node,
};

export default UsersProvider;
