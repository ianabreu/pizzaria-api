"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const isAuthenticated_1 = require("../middlewares/isAuthenticated");
const CreateProductController_1 = require("../controllers/product/CreateProductController");
const multer_2 = __importDefault(require("../config/multer"));
const ListByCategoryController_1 = require("../controllers/product/ListByCategoryController");
const upload = (0, multer_1.default)(multer_2.default.upload("tmp"));
const productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
productRouter.post("/product", isAuthenticated_1.isAuthenticated, upload.single("banner"), CreateProductController_1.CreateProductController.handle);
productRouter.get("/category/product", isAuthenticated_1.isAuthenticated, ListByCategoryController_1.ListByCategoryController.handle);
