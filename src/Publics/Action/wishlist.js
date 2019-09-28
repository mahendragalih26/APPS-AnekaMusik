import axios from 'axios';
import {HOST} from '../../config';
// Products
export const getWishlist = () => {
  return {
    type: 'GET_WISHLIST',
    payload: axios.get(`${HOST}/wishlist`),
  };
};

export const getWishlistDetail = (field, id) => {
  return {
    type: 'GET_WISHLIST_DETAIL',
    payload: axios.get(`${HOST}/wishlist?field=${field}&search=${id}`),
  };
};

export const addWishlist = data => {
  return {
    type: 'ADD_WISHLIST',
    payload: axios.post(`${HOST}/wishlist`, data),
  };
};

// export const editwishlist = (id, data) => {
//   return {
//     type: "EDIT_WISHLIST",
//     payload: axios.patch(`http://localhost:8080/wishlist/${id}`, data)
//   };
// };

export const deleteWishlist = id => {
  return {
    type: 'DELETE_WISHLIST',
    payload: axios.delete(`${HOST}/wishlist/${id}`),
  };
};
