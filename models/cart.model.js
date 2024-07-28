import mongoose, { Schema, Types, model } from "mongoose";

const cartSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cartProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  wishlistProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Cart = model("Cart", cartSchema);

export default Cart;
