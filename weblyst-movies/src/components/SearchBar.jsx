
import { useState } from "react";
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm) {
      onSearch(trimmedTerm);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Movie title"
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;