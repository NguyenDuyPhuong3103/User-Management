import express from "express";
const router = express.Router();

import UserController from '../controllers/user.controller';

router.get("/auth/:id",UserController.getUser);
router.get("/", UserController.getUsers);
router.delete("/:id",UserController.deleteUser);

export default router;