const express = require("express");
const app = express();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { check, validationResult } = require('express-validator')


const userRegister = async (req, res) => {
 
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json("Wrong Credentials");

    const hashpassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const Originalpassword = hashpassword.toString(CryptoJS.enc.Utf8);

    Originalpassword !== req.body.password &&
      res.status(401).json("Wrong Credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {}
};

const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};


const deleteUser = async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User Deleted Succussfully");
    } catch (err) {
      res.status(500).json(err);
    }
  }


const getSingleUser = async (req, res) => {
    try {

    const user = await User.findById(req.params.id);
    const {password, ...others} = user._doc;
    res.status(200).json(others )
    } catch (err) {
      res.status(500).json(err);
    }
  }  


  const getAllUsers = async (req, res) => {
    try {

    const users = query ? await User.find().sort({_id :-1}).limit(5) : await User.find();
    res.status(200).json(users )
    } catch (err) {
      res.status(500).json(err);
    }
  }

exports.userRegister = userRegister;
exports.userLogin = userLogin;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getSingleUser = getSingleUser;
exports.getAllUsers = getAllUsers;
