import { Moon, ShoppingCart, Sun } from 'lucide-react';
import { useCart, useTheme } from '../contexts';

export default function Header() {
  const { cart, setShowCart } = useCart();
  const { darkMode, themeDispatch } = useTheme();

  return (
    <header className="w-full px-4 sm:px-6 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          MovieNest
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            aria-label="Cart"
            className="cursor-pointer relative text-gray-700 dark:text-gray-200 hover:text-orange-500 focus:outline-none"
          >
            <ShoppingCart className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-sm">
                {cart.length}
              </span>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => themeDispatch({ type: 'toggle' })}
            aria-label="Toggle Theme"
            className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-yellow-500 focus:outline-none transition"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
