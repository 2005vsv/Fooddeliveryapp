const express = require("express");
const { insertDishes, getDishes } = require("../controllers/dishes");
const router = express.Router();

/**
 * @openapi
 * /api/dishes:
 *   get:
 *     summary: Get all dishes
 *     tags:
 *       - Dishes
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/dishes", getDishes);

/**
 * @openapi
 * /api/dishes/insert:
 *   post:
 *     summary: Insert sample dishes
 *     tags:
 *       - Dishes
 *     responses:
 *       201:
 *         description: Dishes inserted
 */
router.post("/dishes/insert", insertDishes);

module.exports = router;
