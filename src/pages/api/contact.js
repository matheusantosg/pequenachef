export default function (req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'contatopequenachef@gmail.com',
      pass: process.env.PASSWORD_GMAIL,
    },
    secure: true,
  });
  const mailData = {
    from: 'contatopequenachef@gmail.com',
    to: 'pequenachefsimioni@gmail.com',
    subject: `Contato via Site`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
