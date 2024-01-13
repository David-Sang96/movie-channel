/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";

const MovieCards = ({ item }) => {
  return (
    <div className=" sm:self-center">
      <Link to={`/movies/detail/${item.id}`} key={item.id}>
        <div className=" max-w-sm">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          >
            <h2 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h2>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.overview.slice(0, 150)}
            </p>
            <div className="flex items-center justify-between">
              <h2 className="text-lg  tracking-tight dark:text-white bg-slate-700 py-1 px-2 rounded-lg text-white flex items-center gap-1">
                <IoIosStar /> {item.vote_average}
              </h2>
              <div>
                <div className=" flex items-center gap-1  p-2 bg-slate-700 text-white rounded-lg">
                  <CiCalendarDate className="text-lg" />
                  <span>{item.release_date}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default MovieCards;
