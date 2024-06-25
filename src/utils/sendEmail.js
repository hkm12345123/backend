const nodemailer = require('nodemailer');
const { emailCfg, } = require('../config');
const { emailUser, emailPassword } = emailCfg;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
    tls: {
        rejectUnauthorized: false,
    }
  });

const sendEmail = async (to, subject, text, htmlContent) => {
    return await transporter.sendMail({
        from: emailUser,
        to,
        subject,
        text,
        html: htmlContent,
    }, function(err, success){
      if(err) {
        console.log(err);
      }else {
        console.log("send email successfully");
      }
  })
};

module.exports =  sendEmail ;
