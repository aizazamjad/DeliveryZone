import {fetchWrapper} from '../utils/fetchWrapper';

export const getDriversService = () => fetchWrapper('/drivers');

export const getDriverByIDService = ID => fetchWrapper(`/drivers/${ID}`);

export const createDriverService = options =>
  fetchWrapper('POST', '/drivers', options);

export const updateDriverByIDService = (ID, options) =>
  fetchWrapper('PUT', `/drivers/${ID}`, options);

export const deleteDriverByIDService = ID =>
  fetchWrapper('DELETE', `/drivers/${ID}`);
