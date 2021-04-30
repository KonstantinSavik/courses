import { UPDATE_USER } from 'actions/types';

const defaultState = {
  name: '',
  phone: '',
  status: '',
  uuid: '',
};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
