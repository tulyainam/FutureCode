import axios from 'axios';
import {PRODUCT_LIST, CART_ADD, CART_DELETE} from './type';

export const productList = () => {
  console.log('Ürünliste geldi mi&&&&&')
  return (dispatch) => {
    console.log('Ürünliste geldi mi2??????')
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        console.log('ÜrünListesi-------->', response);
        dispatch({
          type: PRODUCT_LIST,
          payload: response,
        });
      })
      .catch(err => {
        console.log('Error----->', err);
      })
  };
};

export const cartAdd = productId => {
  return dispatch => {
    dispatch({
      type: CART_ADD,
      payload: productId,
    });
  };
};

export const cartDelete = productId => {
  return dispatch => {
    dispatch({
      type: CART_DELETE,
      payload: productId,
    });
  };
};