/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "flowbite-react";
import { useEffect } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { api, api_key } from "../api";
import { removeSelectedMovie, selectedMovie } from "../redux/action/movie";

const Details = () => {
  const { movie_id } = useParams();
  const dispatch = useDispatch();

  const getMovie = async () => {
    const res = await api.get(`/movie/${movie_id}?api_key=${api_key}`);
    dispatch(selectedMovie(res.data));
  };

  useEffect(() => {
    if (movie_id) {
      getMovie();
    }
    return () => dispatch(removeSelectedMovie({}));
  }, []);

  const movieDetails = useSelector((store) => store.movies.movie);

  return (
    <div className="mt-4 mx-auto flex flex-col items-center">
      <div>
        <Link to={"/"}>
          <div className="inline-flex items-center p-2 shadow-lg mb-2  rounded-md hover:bg-slate-600 hover:text-white">
            <HiOutlineChevronLeft /> Back
          </div>
        </Link>
      </div>

      <Card
        className="max-w-sm "
        imgSrc={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movieDetails.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {movieDetails.overview}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {movieDetails.tagline}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Run Time : {movieDetails.runtime} minutes
        </p>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <p className="font-bold"> Spoken Languages :</p>
          {movieDetails.spoken_languages &&
            movieDetails.spoken_languages.map((item, index) => (
              <span className="pr-2" key={index}>
                {item.english_name}
              </span>
            ))}
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Budget : {movieDetails.budget}$
        </p>
        <div className=" flex flex-col gap-3">
          <h2 className="text-lg  tracking-tight dark:text-white bg-slate-700 py-1 px-2 rounded-lg text-white flex items-center gap-1">
            <IoIosStar /> {movieDetails.vote_average}
          </h2>
          <div>
            <div className=" flex items-center gap-1  p-2 bg-slate-700 text-white rounded-lg">
              <CiCalendarDate className="text-lg" />
              <span>{movieDetails.release_date}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Details;
