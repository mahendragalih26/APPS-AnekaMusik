import axios from 'axios';
import {HOST} from '../../config';

// Categorys
export const login = data => {
  return {
    type: 'LOGIN',
    payload: axios.post(`${HOST}/auth/login`, data),
  };
};

export const register = data => {
  return {
    type: 'REGISTER',
    payload: axios.post(`${HOST}/auth/register`, data),
  };
};
