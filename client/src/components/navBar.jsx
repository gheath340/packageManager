import { Link } from "react-router-dom";
import { CreateUserModal } from "./createUserModal";
import { MobileNavBar } from "./mobileNavBar";

//just adding this to test
export function NavBar({ cities, addUser, users }) {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div className="-m-1.5 p-1.5 hover:scale-110">
            <Link to="/">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CreateUserModal cities={cities} addUser={addUser} users={users} />
        </div>
      </nav>
    </header>
  );
}
