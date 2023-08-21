import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello Prisma Basic Project");
});

router.post("/create-user", UserController.insertUser);

export const UserRoutes = router;
