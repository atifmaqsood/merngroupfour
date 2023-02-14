const mongoose =  require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    user : 
      {
        userID: { type: mongoose.Schema.Types.ObjectId },
        username: { type: String },
        email: { type: String },
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
