const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");
const { addPattern } = require("../../schemas/contacts");

const addContact = async (req, res, next) => {
  try {
    const { error } = addPattern.validate(req.body);
    if (error) {
      throw RequestError(400, "missing required field");
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
