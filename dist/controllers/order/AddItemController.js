"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemController = void 0;
const AddItemService_1 = require("../../services/order/AddItemService");
const AddItemController = {
    handle: async (request, response) => {
        const { amount, order_id, product_id } = request.body;
        const addItem = await AddItemService_1.AddItemService.execute({
            amount,
            order_id,
            product_id,
        });
        return response.status(201).json(addItem);
    },
};
exports.AddItemController = AddItemController;
