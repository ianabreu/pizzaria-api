import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

const CreateUserService = {
  execute: async ({ name, email, password }: UserRequest) => {
    if (!email) throw new Error("email invalid");
    if (!name) throw new Error("name invalid");

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) throw new Error("user already exists");

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  },
};

export { CreateUserService };
