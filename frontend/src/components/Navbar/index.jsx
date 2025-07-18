import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usecart } from "../../cartcontext";
import { uselogin } from "../../cartcontext/logincontext";

function Navbar({ setquery, query, food }) {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const { cart } = Usecart();
  const { token, user, logindispatch } = uselogin();
  const [searchdata, setSearchdata] = useState([]);

  useEffect(() => {
    if (query !== "") {
      setSearchdata(food);
    } else {
      setSearchdata([]);
    }
  }, [query, food]);

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const onloginclick = () => navigate("/auth/login");
  const onsignupclick = () => navigate("/auth/signup");

  const onlogoutclick = () => {
    logindispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  const onhandleclick = () => setquery("");

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

        {/* Search Bar */}
        <div className="relative w-full order-last md:order-none md:w-auto md:flex-1 md:max-w-md lg:max-w-xl mx-0 md:mx-4 mt-4 md:mt-0">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <svg
            onClick={onhandleclick}
            className="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
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
            className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {searchdata?.length > 0 && (
            <div className="absolute bg-white shadow-md z-20 mt-1 w-full rounded-md p-2 max-h-48 overflow-y-auto">
              {searchdata.map((item, index) => (
                <a
                  key={index}
                  href={`#${item._id}`}
                  className="block text-sm text-gray-800 hover:text-indigo-600 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right-side */}
        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
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

          {/* Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative p-1.5 cursor-pointer rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>

          {/* Account Dropdown */}
          <div className="relative cursor-pointer">
            <div
              onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
              className="cursor-pointer flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:ring-2 hover:ring-indigo-400"
            >
              {token && user?.image ? (
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : token && user?.name ? (
                <span className="text-sm font-bold uppercase text-indigo-700">
                  {user.name[0]}
                </span>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                </svg>
              )}
            </div>

            {isAccountDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded-md py-2 px-4 z-20 w-40">
                <ul className="space-y-2 text-black font-medium">
                  {token && user ? (
                    <>
                      <li>
                        <button
                          onClick={onlogoutclick}
                          className="w-full cursor-pointer text-left text-red-600 hover:text-red-800"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          onClick={onloginclick}
                          className="w-full text-left hover:text-indigo-600"
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={onsignupclick}
                          className="w-full text-left hover:text-indigo-600"
                        >
                          Signup
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
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
      </nav>

      {/* Mobile Nav Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-white shadow-md px-6 py-4">
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
