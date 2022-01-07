const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'resetear.usuario@gmail.com',
        pass: 'pffrnrppqplgopxi'
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'resetear.usuario@gmail.com', // sender address
    to: "emercadogarcia@gmail.com", // list of receivers
    subject: "Este es un nuevo mensaje", // Subject line
    text: "Hola, este es un nuevo correo", // plain text body
    html: "<b>Hola, este es un nuevo correo</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail()
// .catch(console.error);
