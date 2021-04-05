import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { SET_CONVERSATION_USER, REMOVE_CONVERSATION_USER } from '../constants';

const UsersReducer = (state, action) => {
  switch (action.type) {
    case SET_CONVERSATION_USER:
      return { user: action.user };
    case REMOVE_CONVERSATION_USER:
      return { user: null };
    default:
      return state;
  }
};

const initialState = {
  currentUser: null,
};

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

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

export { useUsersContext };

export default UsersProvider;
