import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";

const userRouter = Router();

userRouter.post("/users", CreateUserController.handle);
userRouter.post("/session", AuthUserController.handle);

export { userRouter };
