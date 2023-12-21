"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const CreateUserService = {
    execute: async ({ name, email, password }) => {
        if (!email)
            throw new Error("email invalid");
        if (!name)
            throw new Error("name invalid");
        const userAlreadyExists = await prisma_1.default.user.findFirst({
            where: {
                email: email,
            },
        });
        if (userAlreadyExists)
            throw new Error("user already exists");
        const passwordHash = await (0, bcryptjs_1.hash)(password, 8);
        const user = await prisma_1.default.user.create({
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
exports.CreateUserService = CreateUserService;
