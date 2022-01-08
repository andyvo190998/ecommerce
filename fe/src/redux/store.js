import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import { cartReducer } from './reducer/cartReducer';
import { getProductReducer, getProductDetails } from './reducer/productReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProduct: getProductReducer,
    getProductDetail: getProductDetails
});
// const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// const INITIAL_STATE = {
//     cart: {
//         cartItems: cartFromLocalStorage
//     }
// }
const cartItemsInLocalStorage = window.localStorage.getItem("cart") !=="undefined"
  ? JSON.parse(window.localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
const middleWare = [thunk];
const store = createStore(reducer,INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleWare)))

export default store;