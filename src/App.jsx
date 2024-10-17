import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";

function App() {
  const [movies, setMovies] = useState([]);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMoviesRequest();
  }, []);

  return (
    <div className=" col-2 movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4 ">
        <MovieListHeading heading="Movies" />
        <SearchBox />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
