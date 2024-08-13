import { Router } from "express";
import {
  GetAllCartProducts,
  AddToCart,
  buyProducts,
  getOrderDetails
} from "../controllers/user.controllers.js";
import { checkIsUserValid } from "../middlewares/all.middlewares.js";

const router = Router();

router.get("/get-all-cart-product", checkIsUserValid, GetAllCartProducts);
router.post("/add-to-cart", checkIsUserValid, AddToCart);
router.post("/buy-products", checkIsUserValid, buyProducts);
router.post('/get-order-details', getOrderDetails)
export default router;
