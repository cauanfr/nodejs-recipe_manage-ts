import { Router } from "express";
import middlewares from "../middlewares";
import { ingredientCreateSchema } from "../schemas";
import { ingredientControllers } from "../controllers";

export const ingredientRouter: Router = Router();

ingredientRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.validateBody(ingredientCreateSchema),
  middlewares.uniqueIngredient,
  ingredientControllers.create
);
