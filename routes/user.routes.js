import { Router } from "express";
import {
  GetAllCartProducts,
  AddToCart,
  buyProducts,
} from "../controllers/user.controllers.js";
import { checkIsUserValid } from "../middlewares/all.middlewares.js";

const router = Router();

router.get("/get-all-cart-product", checkIsUserValid, GetAllCartProducts);
router.post("/add-to-cart", checkIsUserValid, AddToCart);
router.post("/buy-products", checkIsUserValid, buyProducts);

export default router;
