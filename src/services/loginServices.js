import {fetchWrapper} from '../utils/fetchWrapper';

export const loginService = options => fetchWrapper('POST', '/login', options);
