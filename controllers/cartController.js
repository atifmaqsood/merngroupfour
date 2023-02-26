const express = require("express");
const app = express();
const Cart = require("../models/cartModel");


// const createCart = async (req, res) => {
//   const newCart = new Cart(req.body);

//   try {
//     const savedCart = await newCart.save();
//     res.status(200).json(savedCart);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };


const createCart = async (req, res) => {
  const {  productID, quantity } = req.body;
  const user = req.body.user;
  JSON.parse
  console.log("our user" , user)
  // const {  userID, username, email } = {user};
  const userID = user['_id']
  const username = user['username']
  const email = user['email']
  console.log(userID)
  console.log(username)
  console.log(email)
  // console.log(userID, username, email)
  const newCart = new Cart({
    user: {
      userID,
      username,
      email
    },
    products: [{ productID, quantity }]
  });

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};



const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Deleted Succussfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userID: req.params.userID,
    });
    console.log(cart)
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllUsersCarts = async (req, res) => {
  try {
    const carts = new Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.createCart = createCart;
exports.updateCart = updateCart;
exports.deleteCart = deleteCart;
exports.getSingleUserCart = getSingleUserCart;
exports.getAllUsersCarts = getAllUsersCarts;
