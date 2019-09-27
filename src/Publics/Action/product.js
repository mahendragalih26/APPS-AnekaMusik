import axios from 'axios';
import {HOST} from '../../config';

// Products
export const getProduct = (field, id) => {
  return {
    type: 'GET_PRODUCTS',
    payload: axios.get(`${HOST}/product?field=${field}&search=${id}`),
  };
};

export const getProductsDetail = id => {
  return {
    type: 'GET_PRODUCTS_DETAIL',
    payload: axios.get(`${HOST}/product?field=id&search=${id}`),
  };
};

export const addProduct = data => {
  return {
    type: 'ADD_PRODUCTS',
    payload: axios.post(`${HOST}/product`, data, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  };
};

export const editProduct = (id, data) => {
  return {
    type: 'EDIT_PRODUCTS',
    payload: axios.patch(`${HOST}/product/${id}`, data, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  };
};

export const deleteProduct = id => {
  return {
    type: 'DELETE_PRODUCTS',
    payload: axios.delete(`${HOST}/product/${id}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }),
  };
};
