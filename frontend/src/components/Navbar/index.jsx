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
    setMobileMenuOpen(false); // close menu on navigation (mobile)
  };
  const onloginclick = () => {
    navigate("/auth/login");
  };
  const onhandleclick=()=>{
    setquery([]),query("")
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4 gap-y-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/9425/9425742.png"
            alt="delivery logo"
            className="h-9 w-9"
          />
          <h1 className="text-4xl font-semibold text-gray-800">Rasoi</h1>
        </div>

        {/* Search Input - Responsive */}
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
          <svg onClick={onhandleclick}
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
          {searchdata.map((food, index) => {
            return (
              <a
                className="text-black mt-28"
                href={food._id}
                key={index}
                target="_blank"
              >
                {food.name}
              </a>
            );
          })}
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
                <path d="M280-71.52q-33 0-56.5-23.5t-23.5-56.5q0-33 23.5-56.5t56.5-23.5q33 0 56.5 23.5t23.5 56.5q0 33-23.5 56.5T280-71.52Zm400 0q-33 0-56.5-23.5t-23.5-56.5q0-33 23.5-56.5t56.5-23.5q33 0 56.5 23.5t23.5 56.5q0 33-23.5 56.5T680-71.52Zm-419.87-640 83 174h277.74l95.3-174H260.13Zm-47.04-96.96h568.52q32.96 0 50.15 28.98 17.2 28.98 1.11 59.02l-129 233.96q-12.13 21.69-32.58 34.11Q650.84-440 626.52-440H333.61l-38.91 71.52h473.78v96.96H280q-51.22 0-76.48-44.02-25.26-44.03-1.43-86.98l52.3-93.48-139.48-295.52H31.52v-96.96h143.57l38 80Zm130.04 270.96h277.74-277.74Z" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>

            {/* User Icon */}
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
                <path d="M236.83-284.48q51-37.87 112.87-59.24 61.87-21.37 130.42-21.37 68.56 0 131.15 22.22 62.6 22.22 111.9 58.96 33.31-41.57 51.68-90.46 18.37-48.89 18.37-105.63 0-129.61-91.81-221.41-91.8-91.81-221.41-91.81t-221.41 91.81q-91.81 91.8-91.81 221.41 0 56.17 18.09 105.06 18.09 48.9 51.96 90.46ZM480-434.91q-61.26 0-102.89-41.35t-41.63-102.61q0-61.26 41.63-102.89T480-723.39q61.26 0 102.89 41.63t41.63 102.89q0 61.26-41.63 102.61T480-434.91Zm-.05 374.13q-86.91 0-163.3-32.91-76.39-32.92-133.22-89.74-56.82-56.83-89.74-133.27-32.91-76.44-32.91-163.35t32.91-163.3q32.92-76.39 89.74-133.22 56.83-56.82 133.27-89.74 76.44-32.91 163.35-32.91t163.3 32.91q76.39 32.92 133.22 89.74 56.82 56.83 89.74 133.27 32.91 76.44 32.91 163.35t-32.91 163.3q-32.92 76.39-89.74 133.22-56.83 56.82-133.27 89.74-76.44 32.91-163.35 32.91Zm.05-106q50.17 0 93.78-14.09t82.61-40.83q-40.13-27.3-82.33-41.1-42.19-13.81-94.06-13.81-51.87 0-93.78 13.81-41.92 13.8-82.05 41.1 39 26.74 82.33 40.83t93.5 14.09Zm0-356.61q23.74 0 39.61-15.87 15.87-15.87 15.87-39.61 0-23.74-15.87-39.89-15.87-16.15-39.61-16.15-23.74 0-39.61 16.15-15.87 16.15-15.87 39.89 0 23.74 15.87 39.61 15.87 15.87 39.61 15.87Zm0-55.48Zm.57 357.17Z" />
              </svg>
              {isaccountdropdownopen && (
                <div className="absolute top-full right-0 bg-white shadow-md rounded-md py-2 px-4 z-10">
                  <ul className="space-y-2 text-gray-700 font-medium">
                    <li className="hover:text-indigo-600 cursor-pointer">
                      <button onClick={onloginclick} className="cursor-pointer">
                        Login
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Hamburger Menu */}
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
