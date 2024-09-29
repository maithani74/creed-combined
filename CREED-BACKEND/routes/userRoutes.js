const express = require("express");
const {
  registerController,
  loginController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
  getAllUsers,
  findUser,
  addToCart,
  getCart,
  deleteInCart,
  updateCart,
  resetCart,
  deleteUserController,
} = require("../controller/userController");
// router object
const router = express.Router();
const formidable = require("express-formidable")
//routing

//REGISTER
router
  .post("/register", registerController)
  .post("/login", loginController)
  .get("/get-users",getAllUsers)
  .get("/get-user/:id",findUser)
  .post("/addToCart/:id",formidable(),addToCart)
  .get("/getCart/:id",getCart)
  .put("/deleteCart/:id",deleteInCart)
  .put("/updateCart/:id",updateCart)
  .put("/resetCart/:id",resetCart)
  .get("/user-auth", (req, res) => {
    res.status(200).send({ ok: true });
  })
  .get("/admin-auth", (req, res) => {
    res.status(200).send({ ok: true });
  })
  .delete("/delete/:id",deleteUserController)
  .get("/orders", getOrdersController)
  .get("/all-orders", getAllOrdersController)
  .put("/order-status/:id", orderStatusController);
exports.router = router;
