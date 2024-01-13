/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api, api_key } from "../api";
import Movies from "../components/Movies";
import { fetchData } from "../redux/action/movie";
const Home = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await api.get(`movie/now_playing?api_key=${api_key}`);
    dispatch(fetchData(res.data.results));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
