import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";

const ListByCategoryController = {
  handle: async (request: Request, response: Response) => {
    const category_id = request.query.category_id as string;
    const findByCategory = await ListByCategoryService.execute({ category_id });
    return response.status(200).json(findByCategory);
  },
};

export { ListByCategoryController };
