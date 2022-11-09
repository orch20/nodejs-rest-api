const sgMail = require("@sendgrid/mail");

const { SENDGRID_KEY } = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "orest.chorny@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
