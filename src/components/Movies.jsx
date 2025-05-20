import getMovies from '../data/moviesData';
import Movie from './Movie';

export default function Movies() {
  const movies = getMovies();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
