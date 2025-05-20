import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Intro from './components/Intro';
import { MoviesProvider, ThemeProvider } from './contexts';
export default function App() {
  return (
    <>
      <ThemeProvider>
        <MoviesProvider>
          <Header />
          <Intro />
          <Home />
          <Footer />
          <ToastContainer />
        </MoviesProvider>
      </ThemeProvider>
    </>
  );
}
