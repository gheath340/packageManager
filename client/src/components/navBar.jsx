import { Link } from "react-router-dom";
import { MobileNavBar } from "./mobileNavBar";
import Logo from "../box.png";

export function NavBar({ cities, addUser, users }) {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-center justify-around p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:justify-center lg:flex-1">
          <div className="-m-1.5 p-1.5 hover:scale-110">
            <Link to="/">
              <img className="h-12 w-auto" src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex lg:hidden">
          <MobileNavBar />
        </div>
        <div className="hidden lg:flex lg:gap-x-16">
          <div className="text-lg leading-6 text-gray-900 hover:scale-110">
            <Link to="/">Home</Link>
          </div>
          <div className="text-lg leading-6 text-gray-900 hover:scale-110">
            <Link to="/packages">Packages</Link>
          </div>
          <div className="text-lg leading-6 text-gray-900 hover:scale-110">
            <Link to="/drivers">Drivers</Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          <div className="text-lg leading-6 text-gray-900 cursor-pointer lg:hover:scale-110">
            <Link to="/login">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
