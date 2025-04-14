const dishesmodel = require("../models/dishes");
const senddishes = (req, res) => {
  dishesmodel.find().then((dishes) => {
    console.log(dishes);
    res.send(dishes);
  });
};
module.exports = {
  senddishes,
};
