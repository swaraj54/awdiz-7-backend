import { Router } from "express";
import {
  GetAllCartProducts,
} from "../controllers/user.controllers.js";
import { checkIsUserValid } from "../middlewares/all.middlewares.js";

const router = Router();

router.get("/get-all-cart-product", checkIsUserValid ,GetAllCartProducts);

export default router;
