import { getRandomArrayElement } from 'utils/utils';

import { UPDATE_USER } from '../types';

export const fetchUsers = async (dispatch) => {
  const response = await fetch('api/v1/test-request');
  const data = await response.json();
  const randomUser = getRandomArrayElement(data);

  dispatch({ payload: randomUser, type: UPDATE_USER });
};
