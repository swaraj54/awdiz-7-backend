import { Router } from "express";
import {
  CreateNewProduct,
  filter,
  GetAllProducts,
  agPipeline,
  GetSingleProducts,
  agUnwinding,
  search
} from "../controllers/product.controllers.js";
import { checkIsAdminValid } from "../middlewares/all.middlewares.js";

const router = Router();

router.get("/get-all-product", GetAllProducts);
router.post("/get-single-product", GetSingleProducts);
router.post("/create-new-product", checkIsAdminValid, CreateNewProduct);
router.post("/filter", filter);
router.post("/aggreration-pipeline", agPipeline);
router.post("/ag-unwinding", agUnwinding);
router.post("/search", search);

export default router;
