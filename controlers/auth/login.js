const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.verify) {
      throw RequestError(401, "Email or password wrong");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw RequestError(401, "Email or password wrong");
    }

    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "72h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
