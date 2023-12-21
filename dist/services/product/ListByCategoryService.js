"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const ListByCategoryService = {
    execute: async ({ category_id }) => {
        const findByCategory = await prisma_1.default.product.findMany({
            where: {
                category_id: category_id,
            },
            orderBy: {
                name: "asc",
            },
        });
        return findByCategory;
    },
};
exports.ListByCategoryService = ListByCategoryService;
