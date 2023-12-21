"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../../services/category/CreateCategoryService");
const CreateCategoryController = {
    handle: async (request, response) => {
        const name = request.body.name;
        if (!name)
            throw new Error("name invalid");
        const category = await CreateCategoryService_1.CreateCategoryService.execute({ name: name.trim() });
        return response.status(201).send();
    },
};
exports.CreateCategoryController = CreateCategoryController;
