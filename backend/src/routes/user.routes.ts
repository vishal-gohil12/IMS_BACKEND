import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

export const userRoute = Router();

userRoute.get("/user/get_all", getUsers);