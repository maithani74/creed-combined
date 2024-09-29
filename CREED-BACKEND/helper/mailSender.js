const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      auth: {
        user: "temp83146@gmail.com",
        pass:"wngk gmrd wgou tylx",
      },
    });

    let info = await transporter.sendMail({
      from: "creed",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
