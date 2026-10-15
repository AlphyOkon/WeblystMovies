// src/pages/Home.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function Home() {
  const [query, setQuery] = useState("Batman");
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("year-desc");

  useEffect(() => {
    async function fetchMovies() {
      if (!query) return;
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      if (data.Search) {
        let sorted = [...data.Search];
        if (sortBy === "year-desc") {
          sorted.sort((a, b) => (b.Year || 0) - (a.Year || 0));
        } else if (sortBy === "year-asc") {
          sorted.sort((a, b) => (a.Year || 0) - (b.Year || 0));
        }
        setMovies(sorted);
      } else {
        setMovies([]);
      }
    }
    fetchMovies();
  }, [query, sortBy]);

  return (
    <section className="home">
      <div className="hero">
        <h1>Search Movies</h1>
        <p>Powered by OMDb API.</p>
        <div className="search-row">
          <input
            type="text"
            placeholder="Search by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="year-desc">Year ↓</option>
            <option value="year-asc">Year ↑</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            key={movie.imdbID}
            className="movie-card"
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.Title}
            />
            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </Link>
        ))}
        {movies.length === 0 && (
          <p className="empty-state">No movies found. Try another search.</p>
        )}
      </div>
    </section>
  );
}

export default Home;
