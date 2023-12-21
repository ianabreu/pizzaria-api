"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemController = void 0;
const RemoveItemService_1 = require("../../services/order/RemoveItemService");
const RemoveItemController = {
    handle: async (request, response) => {
        const item_id = request.query.item_id;
        const removeItem = await RemoveItemService_1.RemoveItemService.execute({
            item_id,
        });
        return response.status(200).json(removeItem);
    },
};
exports.RemoveItemController = RemoveItemController;
