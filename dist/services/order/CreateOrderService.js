"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const CreateOrderService = {
    execute: async ({ table, name }) => {
        const order = await prisma_1.default.order.create({
            data: {
                table,
                name,
            },
        });
        return order;
    },
};
exports.CreateOrderService = CreateOrderService;
