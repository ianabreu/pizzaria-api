"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const CreateCategoryService = {
    execute: async ({ name }) => {
        if (!name || name.trim().length === 0)
            throw new Error("name invalid");
        const categoryAlreadyExists = await prisma_1.default.category.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive",
                },
            },
        });
        if (categoryAlreadyExists)
            throw new Error("category already exists");
        const category = await prisma_1.default.category.create({
            data: {
                name,
            },
        });
        return category;
    },
};
exports.CreateCategoryService = CreateCategoryService;
