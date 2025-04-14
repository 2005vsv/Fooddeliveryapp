import React from "react";
import { usecart } from "../cartcontext";
import { gettotalcartamount } from "../utils/gettotalcartamount";

function Pricedetails() {
  const { cart } = usecart();
  const totalcartamount = gettotalcartamount(cart);
  const deliverycharge = 20;
  const totalamount = totalcartamount + deliverycharge;
 

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-bold text-gray-700 mb-2">Price Details</h2>

      {/* Price Summary */}
      <div className="flex justify-between mb-2">
        <p className="text-gray-600 text-sm">Price ({cart.length}) items</p>
        <p className="text-gray-800 font-medium">{totalcartamount}</p>
      </div>

      {/* Delivery Charge */}
      <div className="flex justify-between mb-2">
        <p className="text-gray-600 text-sm">Delivery Charge</p>
        <p className="text-gray-800 font-medium">{deliverycharge}</p>
      </div>

      {/* Total Amount */}
      <div className="flex justify-between mb-4 border-t border-gray-200 pt-2">
        <p className="text-gray-600 text-sm font-bold">Total Amount</p>
        <p className="text-gray-800 font-bold">{totalamount}</p>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-medium py-2 rounded-md">
        Place Order
      </button>
    </div>
  );
}

export default Pricedetails;
