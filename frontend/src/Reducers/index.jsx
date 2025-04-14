import React from "react";

function Cartreducer(state, { type, payload }) {
  switch (type) {
    case "ADDTOCART":
      return {
        ...state,
        cart: [...state.cart, payload.food],
      };
    case 'REMOVEFROMCART':
      return{
        ...state,
        cart:[...state.cart.filter((food)=>food.id!==payload.id)]
      }
    default:
      return state;
  }
}

export default Cartreducer;
