import { Router } from "express";
import publicRouter from "./publicRoutes";
import restaurantsRouter from "./restaurantsRoutes";

const router = Router();

router.use("/public", publicRouter);
router.use("/restaurant", restaurantsRouter);

export default router;
