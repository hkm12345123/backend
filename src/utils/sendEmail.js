const nodemailer = require('nodemailer');
// const { emailConfig } = require('../config');
// const { emailUser, emailPassword } = emailConfig;

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: emailUser,
//       pass: emailPassword,
//     },
//     tls: {
//         rejectUnauthorized: false,
//     }
//   });

const sendEmail = async (to, subject, text, content) => {
  //   return await transporter.sendMail({
  //       from: emailUser,
  //       to,
  //       subject,
  //       text,
  //       html: `<b>${content}</b>`,
  //   }, function(err, success){
  //     if(err) {
  //       console.log(err);
  //     }else {
  //       console.log("send email successfully");
  //     }
  // })
};

module.exports = { sendEmail };
