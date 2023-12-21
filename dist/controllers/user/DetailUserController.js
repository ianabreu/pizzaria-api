"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailUserController = void 0;
const DetailUserService_1 = require("../../services/user/DetailUserService");
const DetailUserController = {
    handle: async (request, response) => {
        const user_id = request.user_id;
        const user = await DetailUserService_1.DetailUserService.execute(user_id);
        return response.status(200).json(user);
    },
};
exports.DetailUserController = DetailUserController;
