const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      throw RequestError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ name, email, password: hashPassword });
    res.status(201).json({ name: result.name, email: result.email });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
