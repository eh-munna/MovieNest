import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCart } from '../contexts/MoviesProvider';
import MovieModal from './MovieModal';

export default function Movie({ movie }) {
  const { cart, dispatch } = useCart();

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieModal movie={movie} onClose={() => setShowModal(false)} />
      )}

      <div className="flex flex-col justify-between border border-indigo-300 p-4 rounded-md h-full bg-white shadow-md">
        {/* Top section: Title, rating, image */}
        <div className="text-orange-300 mb-4">
          <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
          <p className="text-orange-600 mb-2 flex items-center gap-1">
            <span className="">⭐️</span>
            <span>{movie.rating} </span>
          </p>
          <img
            src={movie.imgSource}
            alt={movie.name}
            className="w-full h-48 object-cover rounded"
          />
        </div>

        {/* Bottom section: Buttons */}
        <div className="mt-auto flex flex-col gap-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleModalOpen()}
          >
            Show Details
          </button>

          <div className="flex justify-between items-center">
            <span className="text-orange-600">Rent for €{movie.price}</span>
            <button
              onClick={() => {
                const isMovieInCart = cart.some((item) => item.id === movie.id);
                if (isMovieInCart) {
                  alert('Movie already in cart');
                  return;
                }
                dispatch({
                  type: 'add-to-cart',
                  payload: movie,
                });
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
