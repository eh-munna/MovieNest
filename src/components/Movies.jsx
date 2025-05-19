import { useMovies } from '../contexts/MoviesProvider';
import Movie from './Movie';

export default function Movies() {
  const movies = useMovies();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
