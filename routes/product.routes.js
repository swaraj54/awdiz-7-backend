import { Router } from "express";
import {
  CreateNewProduct,
  GetAllProducts,
} from "../controllers/product.controllers.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/create-new-product", CreateNewProduct);

export default router;
