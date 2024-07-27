"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
// Define route paths
userRouter.get("/:userId", user_controller_1.getUserController);
userRouter.post("/", user_controller_1.createUserController);
userRouter.delete("/:userId", user_controller_1.deleteUserController);
userRouter.put("/", user_controller_1.UpdateUserController);
exports.default = userRouter;
