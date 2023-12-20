import { Router } from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
const orderRouter = Router();

orderRouter.post("/order", isAuthenticated, CreateOrderController.handle);

export { orderRouter };
