"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserController = void 0;
const AuthUserService_1 = require("../../services/user/AuthUserService");
const AuthUserController = {
    handle: async (request, response) => {
        const { email, password } = request.body;
        const auth = await AuthUserService_1.AuthUserService.execute({ email, password });
        response.status(200).json(auth);
    },
};
exports.AuthUserController = AuthUserController;
