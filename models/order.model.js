import mongoose, { Schema, Types, model } from "mongoose";

const orderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalPaidAmount: Number,
});

const Order = model("Order", orderSchema);

export default Order;
