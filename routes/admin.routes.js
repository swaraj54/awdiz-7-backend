import { Router } from "express";
import { LoginAdmin, RegisterAdmin } from "../controllers/admin.controllers.js";

const router = Router();

router.post("/login-admin", LoginAdmin);
router.post("/register-admin", RegisterAdmin);

export default router;
