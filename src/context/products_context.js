import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  openSidebar: () => { },
  closeSidebar: () => { },
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const context = {
    ...state,
    openSidebar,
    closeSidebar
  };

  async function fetchProducts(url) {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  }

  function openSidebar() {
    dispatch({ type: SIDEBAR_OPEN });
  }

  function closeSidebar() {
    dispatch({ type: SIDEBAR_CLOSE });
  }

  return (
    <ProductsContext.Provider value={context}>
      {children}
    </ProductsContext.Provider>
  )
};

export const useProductsContext = () => {
  return useContext(ProductsContext)
};
