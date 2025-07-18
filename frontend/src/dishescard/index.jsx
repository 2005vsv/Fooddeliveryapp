import React from 'react';
import { Usecart } from '../cartcontext';
import { useNavigate } from 'react-router-dom';
import { Findfoodincart } from '../utils/findproductincart';
function DishesCard({ food }) {
  
  const navigate=useNavigate();
  const {cartdispatch,cart}=Usecart();
  const isfoodincart=Findfoodincart(cart,food.id);
  const oncartclick=(food)=>{
    
    !isfoodincart ?cartdispatch({
      type:'ADDTOCART',
      payload:{food}
    }):navigate('/cart')
  }
  return (
    <div className="w-full sm:w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 m-2 flex flex-col group hover:-translate-y-1">
      <div className="relative">
        <img 
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
          src={food.img} 
          alt={food.name} 
          // loading="lazy"
        />
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <span className="text-sm font-medium text-gray-500 mb-1">
          {food.category}
        </span>
        
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors duration-200">
          {food.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">
            Rs.{food.price}
          </span>
          
          <button onClick={()=>oncartclick(food)}
            className={isfoodincart ? 'px-4 py-2 bg-yellow-300 hover:bg-yellow-500 text-white text-sm font-medium cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400-500 focus:ring-opacity-50 group-hover:bg-yellow-700 group-hover:shadow-md' : 'px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium cursor-pointer rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 group-hover:bg-green-700 group-hover:shadow-md'}
            
          >
            {isfoodincart ? 'Go to cart' :'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishesCard;