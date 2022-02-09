import { Router } from "express";
import { createRestaurantController } from "../controllers/createRestaurantController";
import { loginRestaurantController } from "../controllers/loginRestaurantController";

const publicRouter = Router();

publicRouter.post("/login", loginRestaurantController);
publicRouter.post("/restaurants", createRestaurantController);

export default publicRouter;
