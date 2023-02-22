const { query } = require("express");
const productController = require("../controllers/productController");
const { check, validationResult } = require("express-validator");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const Product = require("../models/productModel");
const fileUpload = require("../middleware/fileUpload")
const router = require("express").Router();

// CREATE PRODUCT

router.post("/addProduct",fileUpload.single('image'), verifyTokenAndAdmin ,productController.createProduct);

// UPDATE Product

router.put("/:id", verifyTokenAndAdmin, productController.updateProduct);

// DELETE PRODUCT

router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);


// GET SINGLE PRODUCT

router.get("/find/:id",  productController.getSingleProduct);


// GET ALL Products

router.get("/",  productController.getAllProducts);

module.exports = router;
