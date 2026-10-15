
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(searchTerm) {
  if (!API_KEY) {
    throw new Error("API key missing. Check your .env file.");
  }

  const params = new URLSearchParams({
    apikey: API_KEY,
    s: searchTerm,
    type: "movie",
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "No movies found.");
  }

  return data.Search || [];
}

export async function getMovieById(imdbID) {
  if (!API_KEY) {
    throw new Error("API key missing. Check your .env file.");
  }

  const params = new URLSearchParams({
    apikey: API_KEY,
    i: imdbID,
    plot: "full",
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error || "Could not load movie details.");
  }

  return data;
}