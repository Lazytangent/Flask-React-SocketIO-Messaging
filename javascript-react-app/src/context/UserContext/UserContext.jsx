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
  user: null,
};

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
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
