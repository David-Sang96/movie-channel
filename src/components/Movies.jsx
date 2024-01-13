import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MovieCards from "./MovieCards";

const Movies = () => {
  const navigate = useNavigate();
  const movieData = useSelector((store) => store.movies.movies);
  if (movieData.length === 0) {
    navigate("/loading");
  }

  return (
    <div className=" container mx-auto mt-4">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  ">
        {movieData &&
          movieData.map((movie) => <MovieCards key={movie.id} item={movie} />)}
      </div>
    </div>
  );
};

export default Movies;
