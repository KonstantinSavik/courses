import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loadingMiddleware from 'middlewares/loadingMiddleware';

import rootReducer from './reducers';

const configureStore = () => {
  const middlewares = [loadingMiddleware, thunk];

  return createStore(rootReducer(), applyMiddleware(...middlewares));
};

export default configureStore;
