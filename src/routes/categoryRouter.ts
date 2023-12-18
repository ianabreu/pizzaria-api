import { Router } from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
const categoryRouter = Router();

categoryRouter.post(
  "/category",
  isAuthenticated,
  CreateCategoryController.handle
);

export { categoryRouter };
