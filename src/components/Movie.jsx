import { Star } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useCart, useTheme } from '../contexts';
import MovieModal from './MovieModal';

export default function Movie({ movie }) {
  const { cart, dispatch } = useCart();
  const { darkMode } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    const isInCart = cart.some((item) => item.id === movie.id);
    if (isInCart) {
      toast.error(`${movie.name} is already in the cart`, {
        position: 'bottom-right',
        autoClose: 2000,
        theme: darkMode ? 'dark' : 'light',
        transition: Bounce,
      });
    } else {
      dispatch({ type: 'add-to-cart', payload: movie });
      toast.success(`${movie.name} has been added to the cart!`, {
        position: 'bottom-right',
        autoClose: 2000,
        theme: darkMode ? 'dark' : 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <>
      {showModal && (
        <MovieModal movie={movie} onClose={() => setShowModal(false)} />
      )}

      <div className="flex flex-col justify-between h-full border border-indigo-200 dark:border-indigo-400 rounded-lg p-4 shadow-sm bg-white dark:bg-gray-800 transition duration-200">
        {/* Movie Header */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 truncate">
            {movie.name}
          </h2>

          <img
            src={movie.imgSource}
            alt={movie.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />

          <div className="flex items-center text-orange-600 dark:text-orange-400">
            <Star className="w-4 h-4 mr-1" />
            <span>{movie.rating}</span>
          </div>
        </div>

        {/* Movie Footer */}
        <div className="mt-4 flex flex-col gap-3">
          <button
            className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-md transition"
            onClick={() => setShowModal(true)}
          >
            Show Details
          </button>

          <div className="flex justify-between items-center">
            <span className="text-sm text-orange-600 dark:text-orange-400 font-semibold">
              Rent for €{movie.price}
            </span>

            <button
              onClick={handleAddToCart}
              className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-4 rounded-md transition"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
  }).isRequired,
};
