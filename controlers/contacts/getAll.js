const { Contact } = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, ...filter } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find({ owner, ...filter }, "", {
      skip,
      limit,
    }).populate("owner", "_id name email");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
