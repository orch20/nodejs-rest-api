const { Contact } = require("../../models/contacts");

const addContact = async (req, res, next) => {
  try {
    console.log("req.user", req.user);
    const result = await Contact.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
