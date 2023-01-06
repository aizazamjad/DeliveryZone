import {store} from '../redux/store';

/**
 * @function getBearerToken
 * @description
 *   Get token stored in AsyncStorage and return a string of Bearer Token
 * */
export const getBearerToken = async () => {
  const state = store.getState();
  const token = state.userAuth.token;
  const tokenBearer = 'Bearer ' + token;

  return tokenBearer;
};

/**
 * @function fetchWrapper
 * @param {string} arg1 - REST method | url
 * @param {string} [url] - url
 * @param {Object} [body] - body of message
 * @description
 *   Wrapper for the fetch api that provides options defaults and base response code handling.
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const fetchWrapper = async (arg1, url, body, additionalOptions) => {
  // if called with one argument, default to 'GET' method
  const _method = url ? arg1.toUpperCase() : 'GET';
  // if called without method arg, the first
  const _url = url || arg1;
  // get tokenBearer stored in AsyncStorage
  const tokenBearer = await getBearerToken();

  const options = {
    method: _method,
    headers: {
      // Accept: 'application/json',
      Authorization: tokenBearer && tokenBearer,
      'Content-Type': 'application/json',
    },
    body: body && JSON.stringify(body), // body can be undefined, that's ok
    ...additionalOptions,
  };

  return fetch(`https://apptest.deliveryzone.ae/api${_url}`, options).then(
    handleResponse,
  );
};

/**
 * @function handleResponse
 * @param {Object} response - The response object.
 * @description
 *   A handler for the fetch response Object
 * @return {Promise<Object>} A promise containing the deserialized response object.
 * */
export const handleResponse = async response => {
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  const res = await response.json();

  return res;
};
