import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cartReducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CHANGE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

function getLocalStorage() {
  let cart = localStorage.getItem('cart');

  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
}

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
  addToCart: () => { },
  removeItem: () => { },
  changeAmount: () => { },
  clearCart: () => { }
};

const CartContext = React.createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const context = {
    ...state,
    addToCart,
    removeItem,
    changeAmount,
    clearCart
  };

  function addToCart(id, color, amount, product) {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        id,
        color,
        amount,
        product
      }
    });
  }

  function removeItem(id) {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  }

  function changeAmount(id, value) {
    dispatch({ type: CHANGE_CART_ITEM_AMOUNT, payload: { id, value } });
  }

  function clearCart() {
    dispatch({ type: CLEAR_CART });
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}
