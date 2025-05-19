import PropTypes from 'prop-types';

export default function MovieModal({ movie, onClose }) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 flex flex-col w-screen h-screen items-center justify-center bg-black/60 backdrop-blur-xs"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 max-h-[90vh] overflow-auto max-w-md w-full shadow-lg"
        >
          <div className="bg-white rounded-lg p-4 shadow-md overflow-hidden">
            <h2 className="text-orange-600 text-xl font-bold mb-2">
              {movie.name}
            </h2>
            <p className="text-gray-600">{movie.description}</p>
            <button
              onClick={onClose}
              className="cursor-pointer mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// PropTypes for MovieModal
MovieModal.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    imgSource: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
