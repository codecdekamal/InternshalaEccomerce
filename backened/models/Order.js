const mongoose = require("mongoose");
const singleCartSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  amount: { type: String, required: true },
  product: { type: mongoose.Schema.ObjectId, ref: "Product", required: true },
});
const orderSchema = mongoose.Schema(
  {
    tax: {
      type: Number,
      required: true,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    cartItems: [singleCartSchema],
    status:{
       type:String,
       enum:["pending","failed","paid","delivered","canceled"],
       default:"pending"
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    clientSecret: {
      type: "String",
      required: true,
    },
    paymentIntentId: {
      type: "String",
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Order", orderSchema);
