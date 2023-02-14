const mongoose =  require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    user : 
      {
        userID: { type: mongoose.Schema.Types.ObjectId },
        username: { type: String },
        email: { type: String},
      },
    products: [
      {
        productID: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount : {type : Number, required : true},
    address : {type : Object, required : true},
    status : {type : String, default : "pending"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
