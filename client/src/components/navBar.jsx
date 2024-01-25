import { Link } from "react-router-dom";
import { CreateUserModal } from "./createUserModal";

export function NavBar({ cities, addUser, users }) {
  return (
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="flex gap-x-12">
          <div class="text-sm font-semibold leading-6 text-gray-900 hover:scale-110">
            <Link to="/">Home</Link>
          </div>
          <div class="text-sm font-semibold leading-6 text-gray-900 hover:scale-110">
            <Link to="/packages">Packages</Link>
          </div>
          <div class="text-sm font-semibold leading-6 text-gray-900 hover:scale-110">
            <Link to="/drivers">Drivers</Link>
          </div>
        </div>
        <div class="flex lg:flex-1 lg:justify-end">
          <a class="text-sm font-semibold leading-6 text-gray-900 hover:scale-110">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

// return (
//   <>
//     <div className="flex justify-around w-full py-1 lg:py-2">
//       <div className="text-xl hover:scale-110">
//         <Link to="/">Home</Link>
//       </div>
//       <div className="text-xl hover:scale-110">
//         <Link to="/packages">Packages</Link>
//       </div>
//       <div className="text-xl hover:scale-110">
//         <Link to="/drivers">Drivers</Link>
//       </div>
//       <CreateUsx erModal cities={cities} addUser={addUser} users={users} />
//     </div>
//     <div className="border border-black w-11/12 lg:w-5/6"></div>
//   </>
// );
