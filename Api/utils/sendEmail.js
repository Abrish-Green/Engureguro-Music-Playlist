const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

const sendEmail = async (email, subject, payload, template) => {
    

     /*
      let transporter = nodemailer.createTransport({
             host: 'smtp.mailtrap.io',
             port: 2525,
             auth: {
                 user: process.env.EMAIL_USERNAME,
                 pass: process.env.EMAIL_PASSWORD,
             }
     })
     */

     let transporter = nodemailer.createTransport({
      service: process.env.PRODUCTION_EMAIL_HOST,
      auth: {
          user: process.env.PRODUCTION_EMAIL_USERNAME,
          pass: process.env.PRODUCTION_EMAIL_PASSWORD,
      },
      tls:{
        rejectUnauthorized: false
      }
})

     const source = fs.readFileSync(path.join(__dirname, template), "utf8");
     const compiledTemplate = handlebars.compile(source);
      const message = {
         from: process.env.PRODUCTION_FROM_EMAIL,
         to: email,
         subject: subject,
         html: compiledTemplate(payload)
    }
    transporter.sendMail(message, function(err, info) {
         if (err) {
           console.log(err)
         } else {
           console.log(info);
       }
    })
  
  
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