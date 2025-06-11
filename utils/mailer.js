// const nodemailer = require("nodemailer");
// const CONFIG = require("../config/config"); // Email configuration from your config file
// const EmailAccount = require("../models/EmailAccount");
// const fs = require('fs');
// const path = require('path');


// // Create the transporter using the default email account credentials

// let transporter;

// const initializeTransporter = async () => {
//   try {
//     const defaultEmailAccount = await EmailAccount.getDefaultEmailAccount();
    
//     if (!defaultEmailAccount) {
//       throw new Error("No default email account found!");
//     }

//     transporter = nodemailer.createTransport({
//       host: defaultEmailAccount.host,  // "smtp.gmail.com"
//       port: defaultEmailAccount.port,  // 587
//       secure: true, // false for TLS (587), true for SSL (465)
//       auth: {
//         user: defaultEmailAccount.userName, // Your email
//         pass: defaultEmailAccount.password, // Your App Password
//       },
//       tls: {
//         ciphers: "SSLv3",
//         rejectUnauthorized: false, // Allow self-signed certificates
//       },
//     });

//     console.log("SMTP transporter initialized successfully!");
//   } catch (error) {
//     console.error("Error initializing transporter:", error.message);
//   }
// };


// // const initializeTransporter = async () => {
// //   const defaultEmailAccount = await EmailAccount.getDefaultEmailAccount();

// //   transporter = nodemailer.createTransport({
// //     // host: defaultEmailAccount.host,
// //     // port: defaultEmailAccount.port,
// //     // secure: defaultEmailAccount.ssl,
// //     // auth: {
// //     //     user: defaultEmailAccount.userName,
// //     //     pass: defaultEmailAccount.password,
// //     // },
// //     // tls: {
// //     //     rejectUnauthorized: false,
// //     // },

// //     service: "gmail", // Specify Gmail as the service
// //     auth: {
// //       user: defaultEmailAccount.userName,
// //       pass: defaultEmailAccount.password,
// //     },
// //   });
// // };

// /**
//  * Send email utility
//  * @param {string} to - Recipient's email address
//  * @param {string} subject - Subject of the email
//  * @param {string} body - Email body in HTML format
//  */
// const sendEmail = async (to, subject, body) => {
//   if (!transporter) {
//     await initializeTransporter();
//   }
//   try {
//     const mailOptions = {
//       from: `"Build Your XRF" <${CONFIG.EMAIL.USER}>`, // Sender address
//       to, // Recipient
//       subject, // Subject line
//       html: body, // HTML body content
//     };

//     const info = await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.error(`Error sending email: ${error.message}`);
//     throw new Error("Failed to send email");
//   }
// };

// async function sendWelcomeEmail(email, firstName, randomPassword) {
//   if (!transporter) {
//     await initializeTransporter();
//   }

//   // Path to the HTML template
//   const filePath = path.join(__dirname, '..', 'utils', 'HtmlTemplate', 'user_password_template.html');

//   // Read the template and replace placeholders with dynamic values
//   let htmlContent = fs.readFileSync(filePath, 'utf8');
//   htmlContent = htmlContent.replace('{{firstName}}', firstName); // Insert user's first name
//   htmlContent = htmlContent.replace('{{randomPassword}}', randomPassword); // Insert random password
//   htmlContent = htmlContent.replace('{{year}}', new Date().getFullYear()); // Insert current year

//   // Mail options
//   const mailOptions = {
//     from: `"Build Your XRF" <${CONFIG.EMAIL.USER}>`, // Sender address
//     to: email, // Recipient
//     subject: 'Welcome to Build Your XRF - Your Temporary Password', // Subject line
//     html: htmlContent, // HTML content
//   };

//   // Send the email
//   await transporter.sendMail(mailOptions);
// }


// //OTP send
// async function sendOTPEmail(email, otp) {

//   if (!transporter) {
//     await initializeTransporter();
//   }
//   const filePath = path.join(__dirname, '..', 'utils', 'HtmlTemplate', 'otp_email_template.html');
//   let htmlContent = fs.readFileSync(filePath, 'utf8');

//   htmlContent = htmlContent.replace('{{otp}}', otp); // Insert OTP
//   htmlContent = htmlContent.replace('{{year}}', new Date().getFullYear()); // Insert current year

//   const mailOptions = {
//     from: 'prathamsoni041@gmail.com',
//     to: email,
//     subject: 'Your Email - OTP Code',
//     html: htmlContent,
//   };

//   await transporter.sendMail(mailOptions);
// }

// const sendEmailWithAttachment = async (to, subject, body, attachmentPath) => {
//   if (!transporter) {
//     await initializeTransporter();
//   }

//   try {
//     const mailOptions = {
//       from: `"Build Your XRF" <${CONFIG.EMAIL.USER}>`,
//       to,
//       subject,
//       html: body,
//       attachments: [
//         {
//           filename: path.basename(attachmentPath),
//           path: attachmentPath,
//         },
//       ],
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log(`Email sent: ${info.response}`);
//   } catch (error) {
//     console.error(`Error sending email: ${error.message}`);
//     throw new Error("Failed to send email with attachment");
//   }
// };


// module.exports = { sendEmail, sendOTPEmail,sendWelcomeEmail,sendEmailWithAttachment };
