import { Link } from "react-router-dom";
import { useState, Fragment } from "react";
import { CreateUserModal } from "./createUserModal";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export function NavBar({ cities, addUser, users }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="text-sm font-semibold leading-6 text-gray-900">
            <Link to="/">Home</Link>
          </div>
          <div className="text-sm font-semibold leading-6 text-gray-900">
            <Link to="/packages">Packages</Link>
          </div>
          <div className="text-sm font-semibold leading-6 text-gray-900">
            <Link to="/drivers">Drivers</Link>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <CreateUserModal cities={cities} addUser={addUser} users={users} />
        </div>
      </nav>
      <div className="lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <Link to="/">Home</Link>
                </div>
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <Link to="/packages">Packages</Link>
                </div>
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <Link to="/drivers">Drivers</Link>
                </div>
              </div>
              <div className="py-6">
                <a className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// return (
//   <>
//     <div classNameName="flex justify-around w-full py-1 lg:py-2">
//       <div classNameName="text-xl hover:scale-110">
//         <Link to="/">Home</Link>
//       </div>
//       <div classNameName="text-xl hover:scale-110">
//         <Link to="/packages">Packages</Link>
//       </div>
//       <div classNameName="text-xl hover:scale-110">
//         <Link to="/drivers">Drivers</Link>
//       </div>
//       <CreateUserModal cities={cities} addUser={addUser} users={users} />
//     </div>
//     <div classNameName="border border-black w-11/12 lg:w-5/6"></div>
//   </>
// );

{
  /* <header classNameName="bg-white">
      <nav
        classNameName="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div classNameName="flex lg:flex-1">
          <div classNameName="-m-1.5 p-1.5">
            <Link to="/">
              <img
                classNameName="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div classNameName="flex lg:hidden">
          <button
            type="button"
            classNameName="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span classNameName="sr-only">Open main menu</span>
            <Bars3Icon classNameName="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div classNameName="text-sm font-semibold leading-6 text-gray-900">
          <Link to="/">Home</Link>
        </div>
        <div classNameName="text-sm font-semibold leading-6 text-gray-900">
          <Link to="/packages">Packages</Link>
        </div>
        <div classNameName="text-sm font-semibold leading-6 text-gray-900">
          <Link to="/drivers">Drivers</Link>
        </div>
        <div classNameName="hidden lg:flex lg:flex-1 lg:justify-end">
          <CreateUserModal cities={cities} addUser={addUser} users={users} />
        </div>
      </nav>
      <Dialog
        as="div"
        classNameName="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div classNameName="fixed inset-0 z-10" />
        <Dialog.Panel classNameName="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div classNameName="flex items-center justify-between">
            <div classNameName="-m-1.5 p-1.5">
              <Link to="/">
                <img
                  classNameName="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
            </div>
            <button
              type="button"
              classNameName="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span classNameName="sr-only">Close menu</span>
              <XMarkIcon classNameName="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div classNameName="mt-6 flow-root">
            <div classNameName="-my-6 divide-y divide-gray-500/10">
              <div classNameName="space-y-2 py-6">
                <div classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <Link to="/">Home</Link>
                </div>
                <div classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <Link to="/packages">Packages</Link>
                </div>
                <div classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <Link to="/drivers">Drivers</Link>
                </div>
              </div>
              <div classNameName="py-6">
                <CreateUserModal
                  cities={cities}
                  addUser={addUser}
                  users={users}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header> */
}
