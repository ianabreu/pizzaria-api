import { Router } from "express";
import { userRouter } from "./userRouter";
import { categoryRouter } from "./categoryRouter";

const router = Router();

//-- ROTAS USER --
router.use(userRouter);
router.use(categoryRouter);

export { router };
