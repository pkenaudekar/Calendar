import jsonServer from '../apis/jsonServer';

import { FETCH_YEARS } from './types';

// Action to fetch data from JSON Server API
export const fetchYears = () => async (dispatch) => {
  const res = await jsonServer.get('/year2019');

  dispatch({ type: FETCH_YEARS, payload: res.data });
};
