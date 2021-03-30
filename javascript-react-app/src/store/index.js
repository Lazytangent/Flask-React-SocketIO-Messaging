import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import sessionReducer from './session';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  session: sessionReducer,
  messages: messagesReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, enhancer);

export default configureStore;
