"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use("/files", express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp")));
app.use((error, request, response, next) => {
    if (error instanceof Error) {
        return response.status(400).json({
            error: error.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});
app.listen(process.env.PORT, () => {
    console.log("Server Online");
});
