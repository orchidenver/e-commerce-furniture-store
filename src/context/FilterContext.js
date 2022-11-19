import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filterReducer';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './ProductsContext';

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  listView: false,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
  setGridView: () => { },
  setListView: () => { },
  updateSort: () => { },
  updateFilters: () => { },
  clearFilters: () => { }
};

const FilterContext = React.createContext(initialState);

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  function setGridView() {
    dispatch({ type: SET_GRIDVIEW });
  }

  function setListView() {
    dispatch({ type: SET_LISTVIEW });
  }

  function updateSort(e) {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  }

  function updateFilters(e) {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'category') value = e.target.textContent;
    if (name === 'color') value = e.target.dataset.color;
    if (name === 'price') value = Number(value);
    if (name === 'shipping') value = e.target.checked;

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  }

  function clearFilters() {
    dispatch({ type: CLEAR_FILTERS });
  }

  const context = {
    ...state,
    setGridView,
    setListView,
    updateSort,
    updateFilters,
    clearFilters
  };

  return (
    <FilterContext.Provider value={context}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
