import express from "express";
const router = express.Router();

import AuthController from '../controllers/auth.controller';

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);


export default router;