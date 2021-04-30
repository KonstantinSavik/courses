import { combineReducers } from 'redux';

import loading from './loading/loading';
import user from './user/user';

export default () =>
  combineReducers({
    loading,
    user,
  });
