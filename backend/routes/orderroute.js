const express = require("express");

const { Ordersdata } = require("../controllers/orderscontroller");

const router = express.Router();
router.post("/orders", Ordersdata);
module.exports = router;
