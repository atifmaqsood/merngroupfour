const { query } = require("express");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const Cart = require("../models/cartModel");
const cartController = require("../controllers/cartController");


const router = require("express").Router();

// CREATE CART

router.post("/", verifyToken, cartController.createCart);

// UPDATE CART

router.put("/:id", verifyTokenAndAuthorization, cartController.updateCart);

// // DELETE CART

router.delete("/:id", verifyTokenAndAuthorization, cartController.deleteCart);

// GET SINGLE USER CART

router.get("/find/:id",  verifyTokenAndAuthorization,cartController.getSingleUserCart);


// GET ALL USERS CARTS

router.get("/", verifyTokenAndAuthorization, cartController.getAllUsersCarts)


module.exports = router;
