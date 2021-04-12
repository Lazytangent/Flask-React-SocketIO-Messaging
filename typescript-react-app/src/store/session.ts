import { AppDispatch } from '../types';

const SET_SESSION: string = 'session/SET_SESSION';
const REMOVE_SESSION: string = 'session/REMOVE_SESSION';

interface User {
  username: string;
  email: string;
  id: number;
  errors?: string[];
}

interface Action {
  type: string;
  user?: User;
  users?: User[];
}

interface SetUserAction {
  type: string;
  user: User;
}

interface RemoveAction {
  type: string;
}

interface InitialState {
  user?: User;
}

const setSession = (user: User): SetUserAction => ({
  type: SET_SESSION,
  user,
});

const removeSession = (): RemoveAction => ({
  type: REMOVE_SESSION,
});

export const authenticate = () => async (dispatch: AppDispatch) => {
  const res: Response = await fetch('/api/auth');
  const user: User = await res.json();
  if (!user.errors) {
    dispatch(setSession(user));
  }
  return user;
};

export const login = (credential: string, password: string) => async (dispatch: AppDispatch) => {
  const res: Response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application-json',
    },
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const user: User = await res.json();
  if (!user.errors) {
    dispatch(setSession(user));
  }
  return user;
};

export const logout = () => async (dispatch) => {
  const res: Response = await fetch('/api/auth/logout');
  if (res.ok) {
    dispatch(removeSession());
  }
  return res.json();
};

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => async (dispatch: AppDispatch) => {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      confirm_password: confirmPassword,
    }),
  });
  const user: User = await res.json();
  if (!user.errors) {
    dispatch(setSession(user));
  }
  return user;
};

const initialState: InitialState = {
  user: null,
};

const sessionReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case SET_SESSION:
      return { ...state, user: action.user };
    case REMOVE_SESSION:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;
