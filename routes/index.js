const { Router } = require("express");
const router = Router();
const userRouter = require("./users")
const productRouter = require("./products")


router.use("/user", userRouter);
router.use("/products" , productRouter);



module.exports = router