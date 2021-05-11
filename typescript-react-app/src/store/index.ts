import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

interface HydratedState {
  session: {
    user: {
      username: string;
      email: string;
      id: number;
    },
  },
}

const configureStore = (preloadedState: HydratedState)  => {
  return createStore(rootReducer, preloadedState, enhancer);
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
