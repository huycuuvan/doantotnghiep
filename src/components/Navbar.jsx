import { appleImg } from "../utils";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Link to="/">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </Link>
        <div className="flex flex-1 justify-center max-sm:hidden">
          <Link
            to="/text-assistance"
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            Text Assistance
          </Link>
          <Link
            to="/text-to-image"
            className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
          >
            Generate Image
          </Link>
        </div>
      </nav>
    </header>
  );
};
