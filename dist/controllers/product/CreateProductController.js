"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
const CreateProductController = {
    handle: async (request, response) => {
        const { category_id, description, name, price } = request.body;
        if (!request.file) {
            throw new Error("error upload file");
        }
        else {
            const { filename: banner } = request.file;
            const product = await CreateProductService_1.CreateProductService.execute({
                banner,
                category_id,
                description,
                name,
                price: parseFloat(price),
            });
            return response.status(201).json(product);
        }
    },
};
exports.CreateProductController = CreateProductController;
