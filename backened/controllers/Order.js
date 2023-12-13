const Order = require("../models/Order");
const Product = require("../models/Product");

const { StatusCodes } = require("http-status-codes");
const createOrder = async (req, res) => {
//   console.log(req.body)
//   const {tax,cartItems,shippingFee} = req.body
//   if(cartItems.length<1 && !!cartItems){
//     return res.status(StatusCodes.BAD_REQUEST).json({msg:"Your cart is empty!"})
//   }
//   if(!tax || !shippingFee){
//     return res.status(StatusCodes.BAD_REQUEST).json({msg:"Please provide tax slab and shipping fees."})
//   }
//   let orderItems = [];
//   let subTotal = 0;
//   for (const item of cartItems) {
//     const dbProduct = await Product.findOne({_id:item.product})
//     if(!dbProduct){
//       return res.status(StatusCodes.BAD_REQUEST).json({msg:"Not enough product with this id."})
//     }
//     const {title,price,images,_id} = dbProduct;
//   const singleOrderItem = {title,price,image:images,product:_id}
//        orderItems = [...orderItems,singleOrderItem]
//    subTotal = price *item.amount
//   }
//  console.log("create order")
console.log(req.body)
  // Create a PaymentIntent with the order amount and currency

};
const getAllOrders = async (req, res) => {
 
};
const getSingleOrder = async (req, res) => {

};
const updateOrder = async (req, res) => {
 
};
const getCurrentUserOrder = async (req, res) => {

};

module.exports = {
    createOrder,
  updateOrder  ,
  getSingleOrder,
  getAllOrders,
  getCurrentUserOrder
};
