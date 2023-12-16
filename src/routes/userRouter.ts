import { Router, Request, Response } from "express";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response) => {
  //   throw new Error("Error on request");
  return res.json({ ok: true });
});
// userRouter.post("/users", new CreateUserController().handle);
// userRouter.post("/session", new AuthUserController().handle);
// userRouter.get("/me", isAuthenticated, new DetailUserController().handle);

export { userRouter };
