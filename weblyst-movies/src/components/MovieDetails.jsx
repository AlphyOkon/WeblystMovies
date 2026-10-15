
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../services/omdbApi";
import './MovieDetails.css'

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadMovie() {
      setLoading(true);
      setError("");

      try {
        const result = await getMovieById(id);

        if (!cancelled) {
          setMovie(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err.message || "Unable to load movie details."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMovie();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="movie-details-page">
        <p className="details-message">Loading movie details...</p>
      </main>
    );
  }

  if (error || !movie) {
    return (
      <main className="movie-details-page">
        <p className="details-error">
          {error || "Movie not found."}
        </p>
        <Link to="/" className="back-button">
          Back to Movies
        </Link>
      </main>
    );
  }

  return (
    <main className="movie-details-page">
      <Link to="/" className="back-button">
        ← Back to Movies
      </Link>

      <div className="movie-details-content">
        <img
          className="details-poster"
          src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.co/300x450/121820/00d6a8?text=No+Poster"
          }
          alt={`${movie.Title} poster`}
        />

        <div className="details-info">
          <p className="details-tag">MOVIE DETAILS</p>

          <h1>{movie.Title}</h1>

          <p className="details-meta">
            {movie.Year} · {movie.Rated} · {movie.Runtime}
          </p>

          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>

          <h2>Storyline</h2>
          <p className="details-plot">{movie.Plot}</p>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;