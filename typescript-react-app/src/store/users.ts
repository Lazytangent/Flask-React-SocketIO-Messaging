import { AppDispatch, User } from '../types';

const SET_USERS: string = 'users/SET_USERS';
const SET_USER: string = 'users/SET_USER';
const REMOVE_USER: string = 'users/REMOVE_USER';

interface UserObject {
  [key: number]: User;
}

const setUsers = (users: UserObject) => ({
  type: SET_USERS,
  users,
});

const setUser = (user: User) => ({
  type: SET_USER,
  user,
});

const removeUser = (userId: number) => ({
  type: REMOVE_USER,
  userId,
});
