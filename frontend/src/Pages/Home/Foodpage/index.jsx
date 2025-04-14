import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Navbar/Footer";
import { foodapi } from "../../../Api/foodapi/foodapi";
import Dishescard from "../../../dishescard";

function Foodpage() {
  const [dishes, setdishes] = useState([]);
  const [query, setquery] = useState("");
  
  const [category, setCategory] = useState("all");
  const filteredcategory =
    category === "all"
      ? dishes
      : dishes.filter((food) => food.category === category);
  useEffect(() => {
    (async () => {
      try {
        const dishes = await foodapi();
        // console.log({dishes})
        setdishes(dishes);
      } catch (err) {
        return err;
      }
    })();
  }, []);
  console.log({ dishes });

  return (
    <div>
      <Navbar setquery={setquery} query={query} />
      <div className="flex flex-wrap justify-center gap-4  p-4">
        <button
          className={category=="all" ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer  font-bold py-2 px-4 rounded-lg transition-all duration-300":"bg-white text-black border-b-emerald-600 hover:bg-blue-600 cursor-pointer  font-bold py-2 px-4 rounded-lg transition-all duration-300"}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
           className={category=="beverages" ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer  font-bold py-2 px-4 rounded-lg transition-all duration-300":"bg-white text-black border-b-emerald-600 hover:bg-blue-600 cursor-pointer  font-bold py-2 px-4 rounded-lg transition-all duration-300"}
          onClick={() => setCategory("beverages")}
        >
          Beverages
        </button>
        <button
           className={category=="food" ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer  font-bold py-2 px-4 rounded-lg transition-all duration-300":"bg-white text-black border-b-emerald-600 hover:bg-blue-600 cursor-pointer  font-bold py-2 px-4 rounded-lg transition-all duration-300"}
          onClick={() => setCategory("food")}
        >
          Food
        </button>
      </div>
      {/* <nav className="mt-64">
        <input
          type="text" placeholder="search items  "
          onChange={(e) => setquery(e.target.value.toLowerCase())}
        />
      </nav> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredcategory
          .filter((food) => food.name.toLowerCase().includes(query))
          .map((food) => (
            <Dishescard key={food.id} food={food} query={query} />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Foodpage;
