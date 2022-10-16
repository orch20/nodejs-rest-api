const express = require("express");
const ctrl = require("../../controlers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);
router.get("/:contactId", ctrl.getById);
router.post("/", validateBody(schemas.addSchema), ctrl.addContact);
router.delete("/:contactId", ctrl.removeById);
router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
