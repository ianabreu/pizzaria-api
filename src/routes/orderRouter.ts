import { Router } from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { DeleteOrderController } from "../controllers/order/DeleteOrderController";
import { AddItemController } from "../controllers/order/AddItemController";
const orderRouter = Router();

orderRouter.post("/order", isAuthenticated, CreateOrderController.handle);
orderRouter.delete("/order", isAuthenticated, DeleteOrderController.handle);

orderRouter.post("/order/add", isAuthenticated, AddItemController.handle);

export { orderRouter };
