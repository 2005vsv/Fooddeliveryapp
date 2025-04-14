import { Fragment } from "react";
import { useState } from "react";
import { usecart } from "../cartcontext";
function HorizontalfoodCard({ food }) {
  const { cartdispatch } = usecart();
  const [count, setcount] = useState(1);
  const onremoveclick = () => {
    cartdispatch({
      type: 'REMOVEFROMCART',
      payload: { id: food.id }
    });
  };
  return (
    <Fragment>
      <div className="flex flex-col xs:flex-row items-center bg-gray-100 shadow-sm rounded-lg overflow-hidden w-full max-w-sm sm:max-w-md mx-auto my-2">
        
        {/* Image Section */}
        <div className="w-20 h-20 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded"
            src={food.img}
            alt={food.name}
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between p-4 w-full">
          <div className="text-sm font-semibold text-gray-700 truncate">{food.category}</div>
          <div className="mt-2">
            <p className="text-gray-600 text-sm truncate">{food.name}</p>
            <p className="text-base font-bold text-gray-800">Rs. {food.price * count}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            {/* Quantity Control */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setcount((count) => Math.max(1, count - 1))} 
                className="w-6 h-6 flex items-center justify-center border cursor-pointer border-gray-300 rounded hover:bg-gray-200 text-sm"
              >
                - 
              </button>
              <span className="text-sm font-medium">{count}</span>
              <button 
                onClick={() => setcount((count) => count + 1)} 
                className="w-6 h-6 flex items-center justify-center cursor-pointer border border-gray-300 rounded hover:bg-gray-200 text-sm"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button 
              onClick={onremoveclick} 
              className="px-4 py-1 bg-red-500 text-white text-sm font-medium cursor-pointer rounded hover:bg-red-600"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HorizontalfoodCard;
