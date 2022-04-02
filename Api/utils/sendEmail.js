const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email, subject, payload, template) => {
      let result = null     
      let transporter = nodemailer.createTransport({
             host: 'smtp.mailtrap.io',
             port: 2525,
             auth: {
                 user: process.env.EMAIL_USERNAME,
                 pass: process.env.EMAIL_PASSWORD,
             }
     })
     if(template == null){
      const message = {
        from: process.env.FROM_EMAIL,
        to: email,
        subject: subject,
        text: "Password Reset was Successful"
   }
    transporter.sendMail(message, function(err, info) {
         if (err) {
           result = (err)
         } else {
           result = (info);
       }
    })

     }else{
      const source = fs.readFileSync(path.join(__dirname, template), "utf8");
      const compiledTemplate = handlebars.compile(source);
       const message = {
          from: process.env.FROM_EMAIL,
          to: email,
          subject: subject,
          html: compiledTemplate(payload)
     }
     transporter.sendMail(message, function(err, info) {
          if (err) {
            result = (err)
          } else {
            result = (info);
        }
     })
     }
     
  
  return result
}
/*
Example:
sendEmail(
  "youremail@gmail.com,
  "Email subject",
  { name: "Eze" },
  "./templates/layouts/main.handlebars"
);
*/

module.exports = sendEmail;