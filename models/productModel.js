

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: { type: String, unique: true },
  desc: { type: String },
  categories: { type: String },
  rating: { type: Number },
  popularity: { type: String },
  price: { type: Number },
  img :{type: String},
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
