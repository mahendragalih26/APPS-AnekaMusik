import axios from 'axios';
import {HOST} from '../../config';
// Categorys
export const getCategory = () => {
  return {
    type: 'GET_CATEGORYS',
    payload: axios.get(`${HOST}/category`),
  };
};
