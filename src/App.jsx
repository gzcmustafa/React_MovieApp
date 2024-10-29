import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourite from "./components/AddFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const getMoviesRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favorites, movie];
    setFavorites(newFavouriteList);
  };

  return (
    <div className=" col-2 movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4 ">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite} // this is about "Add to Favorites" Button
        />
      </div>
      <br />
      <div className="row d-flex align-items-center mt-4 mb-4 ">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourite} // this is about "Add to Favorites" Button
        />
      </div>
    </div>
  );
}

export default App;
