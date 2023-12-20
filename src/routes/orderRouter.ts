import { Router } from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { DeleteOrderController } from "../controllers/order/DeleteOrderController";
import { AddItemController } from "../controllers/order/AddItemController";
import { RemoveItemController } from "../controllers/order/RemoveItemController";
const orderRouter = Router();

orderRouter.post("/order", isAuthenticated, CreateOrderController.handle);
orderRouter.delete("/order", isAuthenticated, DeleteOrderController.handle);

orderRouter.post("/order/add", isAuthenticated, AddItemController.handle);
orderRouter.delete(
  "/order/remove",
  isAuthenticated,
  RemoveItemController.handle
);

export { orderRouter };