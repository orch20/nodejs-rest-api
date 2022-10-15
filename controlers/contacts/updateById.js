const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addPattern } = require("../../schemas/contacts");

const updateById = async (req, res, next) => {
  try {
    const { error } = addPattern.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required field");
    }
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw RequestError(404, "Contact not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
