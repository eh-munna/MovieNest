import { Moon, ShoppingCart, Sun } from 'lucide-react';
import { useCart, useTheme } from '../contexts';

export default function Header() {
  const { cart, setShowCart } = useCart();
  const { darkMode, themeDispatch } = useTheme();
  return (
    <header className="w-full flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-900 border-b border-gray-100/50">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800 dark:text-white">
        MovieNest
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setShowCart(true)}
          aria-label="Cart"
          className="relative flex text-gray-700 dark:text-gray-200 hover:text-blue-500"
        >
          <span>
            <ShoppingCart className="w-6 h-6" />
          </span>
          {cart.length ? (
            <span className="absolute bg-orange-400 h-6 w-6 rounded-full left-[15px] bottom-[10px]">
              {cart?.length}
            </span>
          ) : null}
        </button>
        <button
          onClick={() =>
            themeDispatch({
              type: 'toggle',
            })
          }
          aria-label="Toggle Theme"
          className="text-gray-700 dark:text-gray-200 hover:text-yellow-500"
        >
          {darkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
      </div>
    </header>
  );
}
