const mongoose = require("mongoose");
const mailSender = require("../helper/mailSender.js");
const { emailTemplate } = require("../templates/emailTemplate.js");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification From Creed",
      emailTemplate(otp),
    );
    console.log("Email sent Successfully: ", mailResponse);
  } catch (error) {
    console.log("error occured while sending mails: ", error);
    throw error;
  }
}

OTPSchema.pre("save", async function (next) {
  if (this.isNew) {
    await sendVerificationEmail(this.email, this.otp);
  }
  next();
});

module.exports = mongoose.model("OTP", OTPSchema);
