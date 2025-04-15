const Ordersmodel = require("../models/orders");

const Ordersdata= async (req, res) => {
  try {
    const { items, orderbyuserid, totalprice } = req.body;

    const order = new Ordersmodel({
      items: items,
      orderbyuserid: orderbyuserid,
      totalprice: totalprice,
    });

    const savedorder = await order.save();

    return res.status(200).json({
      order: savedorder,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("something went wrong");
  }
};
module.exports = {Ordersdata};
