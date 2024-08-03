import { Router } from "express";
import { Login, Register,getCurrentUser } from "../controllers/auth.controllers.js";

const router = Router();

// router.use()
router.post("/register", Register);
router.post("/login", Login);
router.get('/get-current-user', getCurrentUser)

export default router;
