import { Router } from "express";
import { LoginAdmin } from "../controllers/admin.controllers.js";

const router = Router();

router.post("/login-admin", LoginAdmin);

export default router;
