import Product from "../models/product.model.js";

export const GetAllProducts = (req, res) => {
  res.send("all products");
};
export const CreateNewProduct = async (req, res) => {
  try {
    const { name, price, category, quantity } = req.body.productData;
    if (!name || !price || !category || !quantity) {
      return res.json({ success: false, error: "All fields are required." });
    }
    const isProductExist = await Product.findOne({ name, category });
    if (isProductExist) {
      return res.json({ success: false, error: "Product is already exists." });
    }

    const newProduct = new Product({
      name: name,
      price: price,
      category,
      quantity,
    });
    await newProduct.save();

    return res.json({
      success: true,
      message: "Product successfully created.",
    });
  } catch (error) {
    console.log(error, "error");
    return res.json({ error: error, success: false });
  }
};
