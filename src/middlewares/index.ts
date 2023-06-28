import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { isAdmin } from "./isAdmin.middleware";
import { uniqueCategory } from "./uniqueCategory.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { uniqueIngredient } from "./uniqueIngredient.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyToken } from "./verifyToken.middleware";

export default {
  handleError,
  idExists,
  validateBody,
  uniqueEmail,
  verifyToken,
  isAdmin,
  uniqueCategory,
  uniqueIngredient,
};
