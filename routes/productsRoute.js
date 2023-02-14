const { query } = require("express");
const productController = require("../controllers/productController");
const { check, validationResult } = require("express-validator");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const Product = require("../models/productModel");

const router = require("express").Router();

// CREATE PRODUCT

router.post("/", verifyTokenAndAdmin,[
  check("title")
    .not()
    .isEmpty()
    .withMessage("Please enter title").isLength({min:4}).withMessage("Title must be at least 5 characters long"),
  check('desc')
    .not()
    .isEmpty()
    .withMessage("Please enter description")
    .isLength({min: 5})
    .withMessage("Description must be at least 5 characters long"),
    check('price').not().isEmpty(),
    
] ,productController.createProduct);

// UPDATE Product

router.put("/:id", verifyTokenAndAdmin, productController.updateProduct);

// DELETE PRODUCT

router.delete("/:id", verifyTokenAndAdmin, productController.deleteProduct);


// GET SINGLE PRODUCT

router.get("/find/:id",  productController.getSingleProduct);


// GET ALL Products

router.get("/",  productController.getAllProducts);

module.exports = router;
