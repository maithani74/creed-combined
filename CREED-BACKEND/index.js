const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const categoryRouter = require("./routes/categoryRoutes");
const authRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoute");
const indexRouter = require("./routes/indexRoutes.js");
const orderRouter = require("./routes/orderRouter.js");
//disabled, using proxy in frontend
app.use(
 cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true,
 }),
);
// app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// configure env
dotenv.config();
const _dirname = path.dirname("");
const buildPath = path.join(_dirname,"../CREED/dist")
app.use(express.static(buildPath))

//database connection
const connection = async () => {
  try {
    const con = await mongoose.connect(process.env.DB);
    console.log("Connected DB successfully");
  } catch (err) {
    console.log("Error Connecting Database");
  }
};

app.use("/api/v1/otp", indexRouter.router);
app.use("/api/v1/category", categoryRouter.router);
app.use("/api/v1/user", authRouter.router);
app.use("/api/v1/product", productRouter.router);
app.use("/api/v1/order", orderRouter.router);

app.listen(process.env.PORT || 4000, (err) => {
  if (err) {
    console.log("Error Running Server");
  }
  connection();
  console.log("listening at port " + process.env.PORT || 4000);
});
