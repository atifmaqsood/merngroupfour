const { query } = require("express");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const Order = require("../models/orderModel");
const orderController = require("../controllers/orderController");
const router = require("express").Router();

// CREATE ORDER

router.post("/", verifyToken, orderController.createOrder);

// UPDATE ORDER

router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);

// // DELETE ORDER

router.delete("/:id", verifyTokenAndAdmin, orderController.deleteOrder);

// GET SINGLE USER ORDERS

router.get("/find/:id",  verifyTokenAndAdmin,orderController.getSingleUserOrder);


// GET ALL USERS ORDERS

router.get("/", verifyTokenAndAdmin, orderController.getAllUserOrders)


module.exports = router;
