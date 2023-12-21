"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderController = void 0;
const DeleteOrderService_1 = require("../../services/order/DeleteOrderService");
const DeleteOrderController = {
    handle: async (request, response) => {
        const order_id = request.query.order_id;
        const removeOrder = await DeleteOrderService_1.DeleteOrderService.execute({ order_id });
        return response.status(200).json(removeOrder);
    },
};
exports.DeleteOrderController = DeleteOrderController;
