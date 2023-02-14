const mongoose =  require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({

title :{type: String, required: true, unique: true},
desc :{type: String , required : true},
img :{type: String, required : true},
categories :{type: Array},
rating :{type: Number},
popularity :{type: String},
price :{type: Number, required : true},

},
{timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema)