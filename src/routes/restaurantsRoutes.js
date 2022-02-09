import { Router } from "express";
import { createOrderController } from "../controllers/createOrderController";
import { createProductController } from "../controllers/createProductController";
import { listOrdersController } from "../controllers/listOrdersController";
import { listProductsController } from "../controllers/listProductsController";

const restaurantsRouter = Router();

restaurantsRouter.post("/products", createProductController);
restaurantsRouter.get("/products", listProductsController);
restaurantsRouter.post("/orders", createOrderController);
restaurantsRouter.get("/orders", listOrdersController);

export default restaurantsRouter;
