const express = require("express");
const { Ordersdata } = require("../controllers/orderscontroller");
const router = express.Router();

/**
 * @openapi
 * /api/orders:
 *   post:
 *     summary: Place a new order
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dishId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Order placed
 */
router.post("/orders", Ordersdata);

module.exports = router;
