const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const { reqLogger } = require("./configs/logger");
const errorHandlerMiddleware = require("./middlewares/errorHandler.middleware")
const routes = require("./routes")

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(reqLogger);
app.use("/api",routes)
app.use(errorHandlerMiddleware);

module.exports = app;
