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

const getSingleUserOrder = async (req, res) => {
  try {
    // const myOrders = new Order();
    // const userid = myOrders.user.userID.toString();
    // console.log(userid);

    const orders = await Order.find({
      userID: req.params.userID
    }).toArray((err, orders) => {
      console.log(orders);
    });
    //   if(!orders){
    //    console.log(orders)
    //   res.status(400).json({ message : "not found" , orders})
    // }

    // if(orders.user.userID.toString() !== req.params.id ){
    //    res.status(400).json({ message : "not ALLOWED" , orders})
    //   }
    res.status(400).json({ message: "got", orders });
  } catch (err) {
    res.status(500).json( { message : "not got", err});
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
