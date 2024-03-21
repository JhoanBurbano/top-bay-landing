import { Link } from "react-router-dom";
import waves from "../assets/wavesOpacity.svg";

const NotFound = () => {
  return (
    <div className="min-h-[100vh] p-[70px] bg-blue-500 relative flex items-center justify-center text-white">
      <span className="text-center">
        <h1 className="text-5xl font-bold">404 Not Found</h1>
        <p className="text-xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="py-2 px-4 border-2 border-white hover:bg-white hover:text-blue-500 active:bg-[#ffffffdd] transition-colors rounded-full mt-4">
            Go to Home
          </button>
        </Link>
      </span>
      <img
        src={waves}
        alt="waves"
        className="w-full absolute bottom-0 left-0 rotate-180 h-60"
      />
    </div>
  );
};

export default NotFound;
