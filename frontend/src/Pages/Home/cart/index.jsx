import React from "react";
import { usecart } from "../../../cartcontext";
import HorizontalfoodCard from "../../../horizontalfoodcard";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Navbar/Footer";
import Pricedetails from "../../../Pricedetails";

function Cart() {
  const { cart } = usecart();
  console.log({ cart });

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="bg-gray-50 min-h-screen">
        <h1 className="text-black text-2xl md:text-3xl font-bold text-center mt-6 mb-4">
          My Cart
        </h1>

        {/* Cart Items */}
        <div className="max-w-5xl mx-auto px-4">
          {cart?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((food) => (
                <HorizontalfoodCard key={food.id} food={food} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty. Add some items to see them here!
            </p>
          )}
        </div>

        {/* Price Details */}
        {cart?.length > 0 && (
          <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
            <Pricedetails />
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Cart;
