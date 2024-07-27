import { Router } from "express";
import { getUserController, createUserController, deleteUserController, UpdateUserController } from "../controllers/user.controller";
const userRouter = Router();

// Define route paths

userRouter.get("/:userId", getUserController);
userRouter.post("/", createUserController);
userRouter.delete("/:userId", deleteUserController);
userRouter.put("/", UpdateUserController);  

export default userRouter;