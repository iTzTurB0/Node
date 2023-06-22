const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'your_email_service',
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

const mailOptions = {
  from: 'your_email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error.message);
  } else {
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  }
});
