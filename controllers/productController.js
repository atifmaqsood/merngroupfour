const express = require("express");
const app = express();
const Product = require("../models/productModel");
const { check, validationResult } = require("express-validator");


const createProduct = async (req, res) => {

  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
console.log(req.body.title)
  const newProduct = new Product({
    title: req.body.title,
    desc: req.body.desc,
    categories: req.body.categories,
    rating: req.body.rating,
    popularity: req.body.popularity,
    price: req.body.price,
    img: req.file ? req.file.path : null
    
  });

  
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
  
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Deleted Succussfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const { password, ...others } = product._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllProducts = async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "not fetching products", err });
  }
};

exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getSingleProduct = getSingleProduct;
exports.getAllProducts = getAllProducts;
