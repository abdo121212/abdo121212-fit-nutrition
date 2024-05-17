import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html, text }) => {
  // sender
  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 456,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"Fit_Nutrition" <${process.env.EMAIL} >`,
    to,
    subject,
    html,
    text,
  });
  //reciver
};
