const express = require("express");
const ctrl = require("../../controlers/auth");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
// router.get("/users/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
