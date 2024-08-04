import { Router } from "express";
import {
  CreateNewProduct,
  filter,
  GetAllProducts,
  agPipeline,
  GetSingleProducts,
} from "../controllers/product.controllers.js";
import { checkIsAdminValid } from "../middlewares/all.middlewares.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/get-single-product", GetSingleProducts);
router.post("/create-new-product", checkIsAdminValid, CreateNewProduct);
router.post('/filter',filter)
router.post('/aggreration-pipeline',agPipeline)

export default router;
