"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderController = void 0;
const SendOrderService_1 = require("../../services/order/SendOrderService");
const SendOrderController = {
    handle: async (request, response) => {
        const { order_id } = request.body;
        const sendOrder = await SendOrderService_1.SendOrderService.execute({ order_id });
        return response.status(200).json(sendOrder);
    },
};
exports.SendOrderController = SendOrderController;
