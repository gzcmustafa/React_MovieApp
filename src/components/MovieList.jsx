const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </>
  );
};

export default MovieList;
