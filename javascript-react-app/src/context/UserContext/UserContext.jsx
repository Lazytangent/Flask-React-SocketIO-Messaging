import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { SET_CONVERSATION_USER, REMOVE_CONVERSATION_USER } from './constants';

const UserReducer = (state, action) => {
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

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [usersState, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ usersState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.defaultProps = {
  children: null,
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { useUserContext };

export default UserProvider;
