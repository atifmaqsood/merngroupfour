const express = require("express");
const app = express();
const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    console.log("Updated body", updatedOrder);
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "not updating", err });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order Deleted Succussfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

// const getSingleUserOrder = async (req, res) => {
  
//     const userId = Order.user.userID;
//     const orders = await Order.find({
//       userId : req.params.id 
  
//     });

//     res.status(200).json({ message: "got", orders });

// };

// const getSingleUserOrder = async (req, res) => {
//   const userId = req.params.id;

//   try {
//     const orders = await Order.find({ 'user.userId': userId });

//     res.status(200).json({ message: 'Got user orders', orders });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error getting user orders' });
//   }
// };

const getSingleUserOrder = async (req, res) => {
  const userId = req.params.id;

  try {
    const orders = await Order.find({ 'user.userID': userId });

    res.status(200).json({ message: 'Got user orders', orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error getting user orders' });
  }
};


const getAllUserOrders = async(req, res)=>{

  try{
      const orders = await Order.find()
      res.status(200).json(orders)
  }
  catch(err){
      res.status(500).json(err)
  }

}

exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;
exports.getSingleUserOrder = getSingleUserOrder;
exports.getAllUserOrders = getAllUserOrders;
