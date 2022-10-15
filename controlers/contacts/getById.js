const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const result = await contacts.getContactById(req.params.contactId);
    if (!result) {
      throw RequestError(404, "Contact not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
