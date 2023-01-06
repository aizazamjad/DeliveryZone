import {fetchWrapper} from '../utils/fetchWrapper';

export const registerService = options =>
  fetchWrapper('POST', '/register', options);
