import jsonServer from '../apis/jsonServer';

import { FETCH_YEARS } from './types';

// Actions for Years
export const fetchYears = () => async (dispatch) => {
  const res = await jsonServer.get('/year2019');

  dispatch({ type: FETCH_YEARS, payload: res.data });
};
