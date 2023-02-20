const { query } = require("express");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const User = require("../models/userModel");
const userController = require("../controllers/userController");
const { getAllUsers } = require("../controllers/userController");

const { check, validationResult } = require('express-validator')
const router = require("express").Router();


// UPDATE USER

router.put("/:id", verifyTokenAndAuthorization, userController.updateUser);

// DELETE USER

router.delete("/:id", verifyTokenAndAuthorization,userController.deleteUser);

// GET SINGLE USER

router.get("/find/:id", verifyTokenAndAdmin, userController.getSingleUser);


// GET ALL USER

router.get("/users", verifyTokenAndAdmin, async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json(users);
});


module.exports = router;
