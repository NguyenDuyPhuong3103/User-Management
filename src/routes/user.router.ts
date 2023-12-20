import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();

// router.get("/", async (_req, res, next) => {
//   const controller = new UserController();
//   const response = await controller.getUsers();
//   return res.send(response);
// });

router.post("/", async (req, res, next) => {
  const controller = new UserController();
  const response = await controller.createUser(req.body);
  if (!response) res.status(404).send({ message: "Can't create user " });
  return res.send(response);
});

router.delete("/:id", async (req, res, next) => {
  const controller = new UserController();
  const response = await controller.deleteUser(req.params.id);
  if (response) {
    res.json({ message: `${response} deleted successfully` });
  } else {
    res.status(404).json({ error: `${response} not found` });
  }
});

// router.get("/:id", async (req, res, next) => {
//   const controller = new UserController();
//   const response = await controller.getUser(req.params.id);
//   if (!response) res.status(404).send({ message: "No user found" });
//   return res.send(response);
// });

export default router;