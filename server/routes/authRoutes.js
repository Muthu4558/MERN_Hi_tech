import express from "express";
import { loginAdmin, signupAdmin } from "../controllers/authController.js";

const router = express.Router();

/**
 * ⚠️ TEMPORARY – use only to create first admin
 */
router.post("/signup", signupAdmin);

router.post("/login", loginAdmin);

export default router;
