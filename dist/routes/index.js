"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const categoryRouter_1 = require("./categoryRouter");
const productRouter_1 = require("./productRouter");
const orderRouter_1 = require("./orderRouter");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (request, response) => {
    return response.json({ massage: "Not Authorized" });
});
router.use(userRouter_1.userRouter);
router.use(categoryRouter_1.categoryRouter);
router.use(productRouter_1.productRouter);
router.use(orderRouter_1.orderRouter);
