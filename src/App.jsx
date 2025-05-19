import Cart from './components/Cart';
import Movies from './components/Movies';
import MoviesProvider from './contexts/MoviesProvider';
export default function App() {
  return (
    <>
      <div className="text-red-400 flex flex-col">
        <h1 className="text-3xl text-center">MovieNest</h1>
      </div>

      <MoviesProvider>
        <div className="flex gap-3">
          {/* Movie Component */}
          <div>
            <Movies />
          </div>
          {/* Cart Component */}
          <div>
            <Cart />
          </div>
        </div>
      </MoviesProvider>
    </>
  );
}
