import { Router } from "express";
import ProductRoutes from "./product.routes.js";
import AuthRoutes from "./auth.routes.js";
import AdminRoutes from "./admin.routes.js";
import UserRoutes from "./user.routes.js";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/admin", AdminRoutes);
router.use("/product", ProductRoutes);
router.use("/user", UserRoutes);

export default router;
