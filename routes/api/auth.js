const express = require("express");
const ctrl = require("../../controlers/contacts");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contacts");

const router = express.Router();

router.post("/register", ctrl.register);
router.get("/users/login", ctrl.login);

module.exports = router;
