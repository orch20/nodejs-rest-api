const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const updateSubscription = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const result = await User.findByIdAndUpdate(_id, req.body);
    if (!result) {
      throw RequestError(404, "Contact not found");
    }
    res.json(req.body);
  } catch (error) {
    next(error);
  }
};

module.exports = updateSubscription;
