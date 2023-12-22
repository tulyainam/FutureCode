import {PRODUCT_LIST} from '../actions/type';

const INITIAL_STATE = {
  products: [],
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return {...state, products: action.payload};
    default:
      return state;
  }
};