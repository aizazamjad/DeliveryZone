import {fetchWrapper} from '../utils/fetchWrapper';

export const getDriversService = () => fetchWrapper('/drivers');
