import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";

const userRouter = Router();

userRouter.post("/users", CreateUserController.handle);

export { userRouter };
