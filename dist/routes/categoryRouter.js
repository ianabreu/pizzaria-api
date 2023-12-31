"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const CreateCategoryController_1 = require("../controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("../controllers/category/ListCategoryController");
const categoryRouter = (0, express_1.Router)();
exports.categoryRouter = categoryRouter;
categoryRouter.post("/category", isAuthenticated_1.isAuthenticated, CreateCategoryController_1.CreateCategoryController.handle);
categoryRouter.get("/category", isAuthenticated_1.isAuthenticated, ListCategoryController_1.ListCategoryController.handle);
