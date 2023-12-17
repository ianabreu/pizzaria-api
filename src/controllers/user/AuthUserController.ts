import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

const AuthUserController = {
  handle: async (request: Request, response: Response) => {
    const { email, password } = request.body;

    const auth = await AuthUserService.execute({ email, password });

    response.status(200).json(auth);
  },
};

export { AuthUserController };
