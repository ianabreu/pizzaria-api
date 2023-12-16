import { Router, Request, Response } from "express";
import { userRouter } from "./userRouter";

const router = Router();

//-- ROTAS USER --
router.use(userRouter);

export { router };
