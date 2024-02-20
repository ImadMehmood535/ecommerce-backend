const { Router } = require("express");
const validateRequest = require("../../middlewares/validateRequestJoi.middleware");
const { registerScehma } = require("../../validations/users");
const { registerUser, findUserProducts } = require("../../controllers/users/user.controller");
const router = Router();

router.post("/register" , validateRequest(registerScehma) , registerUser )
router.get("/products/:userId" , findUserProducts)


module.exports = router