"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailOrderController = void 0;
const DetailOrderService_1 = require("../../services/order/DetailOrderService");
const DetailOrderController = {
    handle: async (request, response) => {
        const order_id = request.query.order_id;
        const listItems = await DetailOrderService_1.DetailOrderService.execute({ order_id });
        return response.status(200).json(listItems);
    },
};
exports.DetailOrderController = DetailOrderController;
