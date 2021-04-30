import { START_LOADING, STOP_LOADING } from '../actions/types';

export default (store) => (next) => async (action, { shouldHandleLoadingState } = {}) => {
  if (shouldHandleLoadingState) {
    store.dispatch({ type: START_LOADING });

    await next(action);

    store.dispatch({ type: STOP_LOADING });
  } else {
    next(action);
  }
};
