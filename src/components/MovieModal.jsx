import PropTypes from 'prop-types';

export default function MovieModal({ movie, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-[90vw] max-w-lg max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl p-6 sm:p-8 transition-all"
      >
        {/* Movie Image */}
        <img
          src={movie.imgSource}
          alt={movie.name}
          className="w-full h-64 object-cover rounded-lg mb-5 shadow"
        />

        {/* Movie Info */}
        <h2 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
          {movie.name}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {movie.description}
        </p>

        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="cursor-pointer mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
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
