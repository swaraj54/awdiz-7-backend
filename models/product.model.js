import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  category: String,
  quantity: Number,
  image: String,
});

const Product = model("Product", productSchema);

export default Product;
