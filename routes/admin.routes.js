import { Router } from "express";
import { LoginAdmin, RegisterAdmin, YourAddedProducts } from "../controllers/admin.controllers.js";
import { checkIsAdminValid } from "../middlewares/all.middlewares.js";

const router = Router();

router.post("/login-admin", LoginAdmin);
router.post("/register-admin", RegisterAdmin);
router.post("/your-added-products",checkIsAdminValid,  YourAddedProducts);

export default router;
