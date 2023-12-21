"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryController = void 0;
const ListByCategoryService_1 = require("../../services/product/ListByCategoryService");
const ListByCategoryController = {
    handle: async (request, response) => {
        const category_id = request.query.category_id;
        const findByCategory = await ListByCategoryService_1.ListByCategoryService.execute({ category_id });
        return response.status(200).json(findByCategory);
    },
};
exports.ListByCategoryController = ListByCategoryController;
