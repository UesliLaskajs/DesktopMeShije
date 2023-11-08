
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky_header">
      <nav className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <button
            aria-label="Open main menu"
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-t border-b border-gray-300 dark:border-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-800">
              <li>
                <Link to="/home" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 dark:hover:text-blue-500 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 dark:hover:text-blue-500 md:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 dark:hover:text-blue-500 md:p-0">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 dark:hover:text-blue-500 md:p-0">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/profile" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 dark:hover:text-blue-500 md:p-0">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 dark:hover:text-blue-500 md:p-0">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
