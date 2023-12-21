"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCategoryController = void 0;
const ListCategoryService_1 = require("../../services/category/ListCategoryService");
const ListCategoryController = {
    handle: async (request, response) => {
        const category = await ListCategoryService_1.ListCategoryService.execute();
        return response.status(200).json(category);
    },
};
exports.ListCategoryController = ListCategoryController;
