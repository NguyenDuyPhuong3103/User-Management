import express from "express";
import PingController from "../controllers/ping.controller";

const router = express.Router();

router.get("/ping", async (_req, res, next) => {
    const controller = new PingController();
    const response = await controller.getMessage(_req, res, next);
    return res.send(response);
  });

export default router;