import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
});

let enhancer: any;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers = composeWithDevTools || compose;
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

const configureStore = (preloadedState: HydratedState) => {
  createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
