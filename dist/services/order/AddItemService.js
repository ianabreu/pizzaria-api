"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const AddItemService = {
    execute: async ({ amount, order_id, product_id }) => {
        const order = await prisma_1.default.item.create({
            data: {
                amount: amount,
                product_id: product_id,
                order_id: order_id,
            },
        });
        return order;
    },
};
exports.AddItemService = AddItemService;
