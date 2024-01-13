import { Button, Navbar, TextInput } from "flowbite-react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { api, api_key } from "../api";
import { fetchData } from "../redux/action/movie";

const HomeNavBar = () => {
  const search = useRef("");
  const dispatch = useDispatch();

  const searchMovie = async (e) => {
    e.preventDefault();

    if (search.current.value !== "") {
      const res = await api.get(
        `/search/movie?query=${search.current.value}&api_key=${api_key}`
      );
      dispatch(fetchData(res.data.results));
    } else {
      const res = await api.get(`movie/now_playing?api_key=${api_key}`);
      dispatch(fetchData(res.data.results));
    }
    search.current.value = "";
  };
  return (
    <Navbar
      fluid
      rounded
      className=" sticky top-0 backdrop-blur-md bg-white/25  "
    >
      <Link to={"/"}>
        <span className="self-center whitespace-nowrap text-3xl font-semibold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 px-3 py-1 rounded-lg text-white">
          Latest Movie Channel
        </span>
      </Link>
      <div className="flex mt-4 lg:order-2">
        <form className="flex gap-1" onSubmit={searchMovie}>
          <TextInput ref={search} />
          <Button type="submit" color="dark">
            Search
          </Button>
        </form>

        <Navbar.Toggle className="ml-10" />
      </div>
      <Navbar.Collapse>
        <NavLink to={"/"} className={"text-xl"}>
          Home
        </NavLink>
        <NavLink to={"*"} className={"text-lg"}>
          About
        </NavLink>
        <NavLink to={"*"} className={"text-lg"}>
          Services
        </NavLink>
        <NavLink to={"*"} className={"text-lg"}>
          Contact
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomeNavBar;
