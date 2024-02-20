const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const { registerUser } = require("../../controllers/users/user.controller");
const { productScehma } = require("../../validations/products");
const { registerProduct } = require("../../controllers/products/products.controller");
const router = Router();

router.post("/register" , validateRequest(productScehma) , registerProduct )


module.exports = router