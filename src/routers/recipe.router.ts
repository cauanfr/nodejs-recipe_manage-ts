import { Router } from "express";
import middlewares from "../middlewares";
import { recipeCreateSchema } from "../schemas";
import { recipeControllers } from "../controllers";

export const recipeRouter: Router = Router();

recipeRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(recipeCreateSchema),
  recipeControllers.create
);
