"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishOrderController = void 0;
const FinishOrderService_1 = require("../../services/order/FinishOrderService");
const FinishOrderController = {
    handle: async (request, response) => {
        const order_id = request.body.order_id;
        const order = await FinishOrderService_1.FinishOrderService.execute({ order_id });
        return response.status(200).json(order);
    },
};
exports.FinishOrderController = FinishOrderController;
