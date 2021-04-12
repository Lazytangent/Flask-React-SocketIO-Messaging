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

}

const setSession = (user: User): SetUserAction => ({
  type: SET_SESSION,
  user,
});

const removeSession = (): RemoveAction => ({
  type: REMOVE_SESSION,
});

export const authenticate = () => async (dispatch) => {
  const res: Response = await fetch('/api/auth');
  const user: User = await res.json();
  if (!user.errors) {
    dispatch(setSession(user));
  }
  return user;
};

export const login = (credential: string, password: string) => async (dispatch) => {
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

const initialState: InitialState = {};

const sessionReducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
