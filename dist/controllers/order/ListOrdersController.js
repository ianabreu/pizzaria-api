"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersController = void 0;
const ListOrdersService_1 = require("../../services/order/ListOrdersService");
const ListOrdersController = {
    handle: async (request, response) => {
        const listOrders = await ListOrdersService_1.ListOrdersService.execute();
        return response.status(200).json(listOrders);
    },
};
exports.ListOrdersController = ListOrdersController;
