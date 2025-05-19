import { useCart } from '../contexts';
import Cart from './Cart';
import Movies from './Movies';

export default function Home() {
  const { showCart, setShowCart } = useCart();

  return (
    <>
      <main>
        {/* Movie Component */}

        <Movies />

        {/* Cart Component */}
        {showCart && <Cart onClose={() => setShowCart(false)} />}
      </main>
    </>
  );
}
