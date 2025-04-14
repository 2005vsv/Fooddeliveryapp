const express=require("express");
const router=express.Router();

const {senddishes}=require("../controllers/dishes");
/**
 * @openapi
 * /api/dishes:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/dishes",senddishes);
module.exports=router;