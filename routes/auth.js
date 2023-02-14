const router = require("express").Router();
const User = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController");
const { check, validationResult } = require("express-validator");

// REGISTER

router.post(
  "/register",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("Username cannot be empty")
      .isLength({ min: 3 })
      .withMessage("username must be of 3 characters"),
    check("email").isEmail().withMessage("Enter correct email"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must be of 5 characters"),
  ],
  userController.userRegister
);

// LOGIN

router.post("/login", userController.userLogin);

module.exports = router;
