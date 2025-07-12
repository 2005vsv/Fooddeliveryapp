const mongoose = require("mongoose");
const dishesmodel = new mongoose.Schema( {
  // _id: {type :String,required:true},
  id: {type :String,required:true},
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
const Dish=mongoose.model("Dish",dishesmodel);
module.exports = Dish;
