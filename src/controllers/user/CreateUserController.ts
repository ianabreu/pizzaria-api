import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

const CreateUserController = {
  handle: async (request: Request, response: Response) => {
    const { name, email, password } = request.body;

    const user = await CreateUserService.execute({ name, email, password });

    return response.status(201).json(user);
  },
};

export { CreateUserController };
