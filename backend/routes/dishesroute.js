const express=require("express");
const router=express.Router();
const { insertDishes, getDishes } = require("../controllers/dishes");
/**
 * @openapi
 * /api/dishes:
 *   get:
 *     description: Get all dishes
 *     responses:
 *       200:
 *         description: Array of dishes
 */
router.get("/dishes", getDishes);

/**
 * @openapi
 * /api/dishes/insert:
 *   post:
 *     description: Insert sample dishes into DB
 *     responses:
 *       201:
 *         description: Dishes inserted
 */
router.post("/dishes/insert", insertDishes);

module.exports = router;