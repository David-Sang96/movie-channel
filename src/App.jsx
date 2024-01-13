import { Route, Routes, useLocation } from "react-router";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Details from "./components/Details";
import Home from "./components/Home";
import HomeNavBar from "./components/HomeNavBar";
import Loading from "./components/Loadiing";
import NotFound from "./components/NotFound";

function App() {
  const location = useLocation();
  return (
    <div className=" p-2 ">
      <HomeNavBar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          key={location.pathname}
          classNames={"fade"}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/detail/:movie_id" element={<Details />} />
            <Route path="/loading" element={<Loading />} />

            <Route path="*" element={<NotFound />} />
            <Route />
            <Route />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
