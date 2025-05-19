/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import { createContext, useContext, useReducer, useState } from 'react';
import cartReducer from '../reducers/cartReducer';
import themeReducer from '../reducers/themeReducer';
export const CartContext = createContext([]);
const ThemeContext = createContext(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useCart = () => {
  return useContext(CartContext);
};

function MoviesProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ cart, dispatch, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
}

function ThemeProvider({ children }) {
  const [darkMode, themeDispatch] = useReducer(themeReducer, true);

  if (typeof document !== 'undefined') {
    document.body.classList.toggle('dark', darkMode);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

MoviesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MoviesProvider, ThemeProvider };
