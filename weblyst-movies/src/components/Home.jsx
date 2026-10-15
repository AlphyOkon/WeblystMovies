
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import MovieCard from "./MovieCard.jsx";
import { searchMovies } from "../services/omdbApi.js";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
    

  async function handleSearch(searchTerm) {
    setLoading(true);
    setError("");

    try {
      const results = await searchMovies(searchTerm);
      setMovies(results);
    } catch (err) {
      setMovies([]);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleSearch("Batman");
  }, []);

  return (
    <main className="home">
      <section className="movie-search-section">
        <p className="movie-tag">WEBLYST MOVIES</p>

        <h1>
          Find Your Next
          <span> Favorite Movie.</span>
        </h1>

        <p className="movie-description">
          Search for movies, discover new favorites, and explore
          the stories behind them.
        </p>

        <SearchBar onSearch={handleSearch} />
      </section>

      <section id="discover" className="movie-results">
        <h2>Discover Movies</h2>

        {loading && (
          <p className="movie-message">Loading movies...</p>
        )}

        {!loading && error && (
          <p className="movie-error">{error}</p>
        )}

        {!loading && !error && movies.length === 0 && (
          <p className="movie-message">
            No movies to display yet. Try another search.
          </p>
        )}

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </div>
      </section>
    </main>
  );
}


export default Home;