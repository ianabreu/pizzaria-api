"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
const CreateUserController = {
    handle: async (request, response) => {
        const { name, email, password } = request.body;
        const user = await CreateUserService_1.CreateUserService.execute({ name, email, password });
        return response.status(201).json(user);
    },
};
exports.CreateUserController = CreateUserController;
