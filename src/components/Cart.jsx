import { Bounce, toast } from 'react-toastify';
import { useCart, useTheme } from '../contexts';

export default function Cart() {
  const { cart, dispatch, setShowCart } = useCart();
  const { darkMode } = useTheme();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      onClick={() => setShowCart(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl shadow-2xl w-[90vw] max-w-lg max-h-[85vh] overflow-y-auto p-6 sm:p-8 transition-all duration-300"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            🛒 Your Cart
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="cursor-pointer text-lg text-gray-400 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Cart Content */}
        {cart?.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            Your cart is currently empty.
          </p>
        ) : (
          <>
            <ul className="space-y-5">
              {cart.map((movie, idx) => (
                <li
                  key={movie.id}
                  className="flex items-center justify-between gap-4 border-b pb-4"
                >
                  <div className="flex-1">
                    <p className="font-medium">
                      {idx + 1}. {movie.name}
                    </p>
                    <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">
                      €{movie.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: 'remove-from-cart',
                        payload: { id: movie.id },
                      });

                      toast.info(`${movie.name} has been removed from cart`, {
                        position: 'bottom-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        theme: darkMode ? 'dark' : 'light',
                        transition: Bounce,
                      });
                    }}
                    className="cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 text-sm rounded-md transition"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="mt-6 text-right pt-4">
              <p className="text-xl font-semibold">
                Total:{' '}
                <span className="text-green-600 dark:text-green-400">
                  €{total.toFixed(2)}
                </span>
              </p>
            </div>
          </>
        )}

        {/* Footer Button */}
        {cart?.length > 0 && (
          <button
            onClick={() => setShowCart(false)}
            className="cursor-pointer mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-md font-semibold transition"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}
