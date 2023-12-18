import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
const userRouter = Router();

userRouter.post("/users", CreateUserController.handle);
userRouter.post("/session", AuthUserController.handle);
userRouter.get("/me", isAuthenticated, DetailUserController.handle);

export { userRouter };
