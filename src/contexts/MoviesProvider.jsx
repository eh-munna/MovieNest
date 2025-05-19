/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

import getMovies from '../data/moviesData';
import cartReducer from '../reducers/cartReducer';
const movies = getMovies();

export const MoviesContext = createContext(null);
export const CartContext = createContext([]);

export const useMovies = () => {
  return useContext(MoviesContext);
};

export const useCart = () => {
  return useContext(CartContext);
};

export default function MoviesProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <MoviesContext.Provider value={movies}>
      <CartContext.Provider value={{ cart, dispatch }}>
        {children}
      </CartContext.Provider>
    </MoviesContext.Provider>
  );
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
