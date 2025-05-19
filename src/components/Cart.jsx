import { useCart } from '../contexts';

export default function Cart() {
  const { cart, dispatch, setShowCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      onClick={() => setShowCart(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg w-[90vw] md:max-w-md lg:max-w-md max-h-[90vh] overflow-auto p-6"
      >
        <div className="flex justify-between items-center mb-8 border-b pb-2">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            🛒 Your Cart
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {cart?.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            Your cart is currently empty.
          </p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((movie, idx) => (
                <li
                  key={movie.id}
                  className="flex items-center justify-between border-b pb-3 gap-4"
                >
                  <div className="flex-1">
                    <p className="font-medium">
                      {idx + 1}. {movie.name}
                    </p>
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      €{movie.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: 'remove-from-cart',
                        payload: { id: movie.id },
                      })
                    }
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 text-right">
              <p className="text-xl font-semibold">
                Total:{' '}
                <span className="text-green-600 dark:text-green-400">
                  €{total.toFixed(2)}
                </span>
              </p>
            </div>
          </>
        )}

        {cart?.length > 0 && (
          <button
            onClick={() => setShowCart(false)}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-sm font-semibold"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}

// Cart.propTypes = {
//   onClose: PropTypes.func.isRequired,
// };
