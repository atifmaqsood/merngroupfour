const express = require("express");
const app = express();
const Cart = require("../models/cartModel");

const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

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
