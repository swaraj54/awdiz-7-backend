import mongoose, { Schema, Types, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  quantity: Number,
  image: String,
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

const Product = model("Product", productSchema);

export default Product;
