import './MovieCard.css'
import { Link } from "react-router-dom";

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie-card">

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
        alt={movie.Title}
        className="movie-poster"
      />

      <div className="movie-info">

        <h3>{movie.Title}</h3>

        <p>{movie.Year}</p>

      <Link
  to={`/movie/${movie.imdbID}`}
  className="movie-details-button"
>
  View Details
</Link>
      </div>

    </div>
  );
}

export default MovieCard;