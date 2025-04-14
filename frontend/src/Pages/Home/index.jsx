import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Navbar/Footer";
import { useNavigate } from "react-router-dom";

// Example of a responsive search bar component
function SearchBar() {
  
  
  return (
    <div className="flex justify-center">
      <form className="flex items-center">
        <input
          type="text"
          placeholder="Search recipes..."
          className="w-full max-w-md p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
}

function Home() {
  
  const navigate = useNavigate();
  return (
    <>
      <Navbar>
        {/* Add the search bar to the navbar */}
        <SearchBar />
      </Navbar>
      <div className="relative">
        {/* Full-screen Video Section */}
        <div className="relative w-full h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline // For better mobile support
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source
              src="https://cdn.pixabay.com/video/2023/01/28/148288-793718093_tiny.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay with content */}
          <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to Our Food World
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Discover delicious recipes, explore unique cuisines, and embark on
              a culinary journey like never before.
            </p>
            
            <button
              className="bg-blue-500 text-white py-3 px-6 rounded-lg cursor-pointer shadow-md hover:bg-blue-600 transition duration-300 text-lg md:text-xl"
              onClick={() => navigate("/foodpage")}
            >
              Explore items
            </button>
           
          </div>
        </div>

        {/* Content Section below video */}
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              <div className="lg:w-1/2">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.FcFCzKzVL2ArKOds6cRoVgHaFE&w=324&h=324&c=7"
                  alt="Food"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Delicious Food Awaits
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                  Explore our collection of mouth-watering dishes, crafted with
                  love and care to satisfy your cravings.
                </p>
                <button
                  className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  onClick={() => navigate("/foodpage")}
                >
                  Start Exploring
                </button>
              </div>
            </div>

            {/* Additional content sections can be added here */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Variety of Cuisines",
                    description:
                      "Explore dishes from around the world in one place.",
                  },
                  {
                    title: "Easy Recipes",
                    description:
                      "Step-by-step guides for both beginners and experts.",
                  },
                  {
                    title: "Quality Ingredients",
                    description:
                      "Only the freshest and finest ingredients recommended.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
