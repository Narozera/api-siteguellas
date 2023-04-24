const mailer = require("nodemailer");
module.exports = (fullName, phone, email, message) => {
  const smtp = mailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "nuvemhealthnursing@gmail.com",
      pass: "lhglhartdrdrwiyf",
    },
  });

  const mail = {
    from: "nuvemhealthnursing@gmail.com",
    to: "gustavopianaro2@gmail.com",
    subject: `Email via site`,
    text: `Nome: ${fullName} \n \nTelefone: ${phone} \n \nEmail: ${email}\n \nMensagem: ${message}`,
  };

  return new Promise((resolve, reject) => {
    smtp
      .sendMail(mail)
      .then((response) => {
        smtp.close();
        return resolve(response);
      })
      .catch((error) => {
        smtp.close();
        return reject(error);
      });
  });
};
