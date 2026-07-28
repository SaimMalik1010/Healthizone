const nodeMailer = require('nodemailer');

const sendEmail = async (options) => {
    try {
            const transporter = nodeMailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASSWORD || process.env.EMAIL_PASS
                }
            });
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: options.to || options.email,
                subject: options.subject,
                text: options.text || options.message
            };
            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    };
module.exports = sendEmail;