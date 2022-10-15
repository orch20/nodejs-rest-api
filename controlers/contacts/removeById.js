const contacts = require("../../models/contacts");
const { RequestError } = require("../../helpers");

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
      throw RequestError(404, "Contact not found");
    }
    res.json({ message: "contact successfully deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
