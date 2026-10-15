// src/pages/MovieDetails.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
      );
      const data = await res.json();
      setMovie(data);
    }
    fetchMovie();
  }, [id]);

  if (!movie) return <p className="loading">Loading...</p>;

  return (
    <section className="details">
      <div className="details-layout">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.Title}
          className="details-poster"
        />
        <div className="details-info">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p className="details-plot">{movie.Plot}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
