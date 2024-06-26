import express from "express";
import {
  addToCart,
  removeForCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router();
// console.log(authMiddleware())

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeForCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;