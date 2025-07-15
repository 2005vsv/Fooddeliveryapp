import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usecart } from "../../cartcontext";

function Navbar({ setquery, query, food }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isaccountdropdownopen, setisaccountdropdownopen] = useState(false);
  const { cart } = usecart();
  const [searchdata, setsearchdata] = useState([]);

  useEffect(() => {
    if (query !== "") {
      (food) => setsearchdata(food);
    }
  }, [query]);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const onloginclick = () => {
    navigate("/auth/login");
  };

  const onsignupclick = () => {
    navigate("/signup");
  };

  const onhandleclick = () => {
    setquery([]);
    query("");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4 gap-y-2">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png"
            alt="delivery logo"
            className="h-9 w-9"
          />
          <h1 className="text-4xl font-semibold text-gray-800">Rasoi</h1>
        </div>

        {/* Search Input */}
        <div className="relative w-full order-last md:order-none md:w-auto md:flex-1 md:max-w-md lg:max-w-xl mx-0 md:mx-4 mt-4 md:mt-0">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <svg
            onClick={onhandleclick}
            className="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          <input
            onChange={(e) => setquery(e.target.value.toLowerCase())}
            type="text"
            autoComplete="on"
            autoFocus
            value={query}
            placeholder="Search for items"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {searchdata.map((food, index) => (
            <a
              className="text-black mt-28"
              href={food._id}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              {food.name}
            </a>
          ))}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li
              onClick={() => handleNavigate("/")}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigate("/About")}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => handleNavigate("/Contact")}
              className="hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Contact
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <button
              className="relative p-1.5 rounded-full cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => navigate("/cart")}
            >
              <svg
                className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="currentColor"
              >
                <path d="..." />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>

            {/* User Icon & Dropdown */}
            <div className="relative">
              <svg
                onClick={() => setisaccountdropdownopen(!isaccountdropdownopen)}
                className="w-6 h-6 text-gray-700 hover:text-indigo-600 cursor-pointer transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="..." />
              </svg>
              {isaccountdropdownopen && (
                <div className="absolute top-full right-0 bg-white shadow-md rounded-md py-2 px-4 z-10">
                  <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="hover:text-indigo-600 cursor-pointer">
                      <button onClick={onloginclick}>Login</button>
                    </li>
                    <li className="hover:text-indigo-600 cursor-pointer">
                      <button onClick={onsignupclick}>Signup</button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4,6H20V8H4V6ZM4,11H20v2H4V11ZM4,16H20v2H4V16Z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-white shadow-md px-6 py-4 animate-fade-in-down">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li
              onClick={() => handleNavigate("/")}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleNavigate("/About")}
              className="hover:text-indigo-600 cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => handleNavigate("/Contact")}
              className="hover:text-indigo-600 cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
