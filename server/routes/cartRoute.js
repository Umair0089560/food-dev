import express from "express";
import {
  addToCart,
  removeForCart,
  getCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";
const cartRouter = express.Router();
// console.log(authMiddleware())
cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeForCart);
cartRouter.post("/get", getCart);

export default cartRouter;