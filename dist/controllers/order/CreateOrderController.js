"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const CreateOrderService_1 = require("../../services/order/CreateOrderService");
const CreateOrderController = {
    handle: async (request, response) => {
        const { table, name } = request.body;
        const order = await CreateOrderService_1.CreateOrderService.execute({ table, name });
        return response.status(201).json(order);
    },
};
exports.CreateOrderController = CreateOrderController;
