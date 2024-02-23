import express from "express";
import UserRouter from "./user.router";
import AuthRouter from "./user.router";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);

export default router;
