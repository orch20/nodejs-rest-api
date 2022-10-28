const express = require("express");
const ctrl = require("../../controlers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:contactId", isValidId, ctrl.getById);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);
router.delete("/:contactId", isValidId, ctrl.removeById);
router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
