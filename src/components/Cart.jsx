import { useCart } from '../contexts/MoviesProvider';

export default function Cart() {
  const { cart, dispatch } = useCart();

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b pb-2">
        🛒 Your Cart
      </h2>

      {cart?.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">
          Your cart is currently empty.
        </p>
      ) : (
        <ul className="space-y-4">
          {cart.map((movie, idx) => (
            <li
              key={movie.id}
              className="flex items-center justify-between border-b pb-3 last:border-b-0 gap-6"
            >
              <div className="flex-1">
                <p className="font-semibold text-lg text-gray-800">
                  {idx + 1}. {movie.name}
                </p>
                <p className="text-sm text-gray-500">
                  €{movie.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() =>
                  dispatch({
                    type: 'remove-from-cart',
                    payload: {
                      id: movie.id,
                    },
                  })
                }
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart?.length > 0 && (
        <div className="mt-6 pt-4 border-t text-right">
          <p className="text-xl font-bold text-indigo-800">
            Total:{' '}
            <span className="text-green-600">
              €{cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
