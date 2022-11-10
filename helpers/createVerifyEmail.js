const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "verification email",
    html: `<a target='_blank' href='${BASE_URL}/users/verify/${verificationToken}'>Click to verify email</a>`,
  };
  return mail;
};

module.exports = createVerifyEmail;
