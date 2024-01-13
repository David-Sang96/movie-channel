import { Button, Spinner } from "flowbite-react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <div className=" flex justify-center  mt-52">
      <Button>
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </div>
  );
};

export default Loading;
