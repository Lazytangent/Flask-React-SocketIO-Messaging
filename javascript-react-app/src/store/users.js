const SET_USERS = 'users/SET_USERS';
const SET_USER = 'users/SET_USER';
const REMOVE_USER = 'users/REMOVE_USER';

const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = (userId) => ({
  type: REMOVE_USER,
  userId,
});

export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');
  const users = await res.json();
  if (!users.errors) {
    dispatch(setUsers(users));
  }
  return users;
};

export const getUserById = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`);
  const user = await res.json();
  if (!user.errors) {
    dispatch(setUser(user));
  }
  return user;
};

export const deleteUser = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  if (!data.errors) {
    dispatch(removeUser(id));
  }
  return data;
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, ...action.users };
    case SET_USER:
      return { ...state, [action.user.id]: action.user };
    case REMOVE_USER:
      return { ...state, [action.userId]: undefined };
    default:
      return state;
  }
};

export default usersReducer;
