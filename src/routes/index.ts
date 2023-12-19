import express from "express";
import PingController from "../controllers/ping.controller";
import UserRouter from "./user.router";

const router = express.Router();

router.get("/ping", async (_req, res, next) => {
    const controller = new PingController();
    const response = await controller.getMessage(_req, res, next);
    return res.send(response);
});

router.use("/users", UserRouter);

export default router;
