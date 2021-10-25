
const nodeMailer = require("nodemailer");
const {
    ADMIN_EMAIL,
    ADMIN_EMAIL_PASSWORD,
    PORT_SEND_MAIL,
} = require("../config/index");

const mailHost = "smtp.gmail.com";
const mailPort = PORT_SEND_MAIL;

module.exports.sendMail = async (email, subject, htmlContent) => {
    try {
        const transporter = nodeMailer.createTransport({
            service: "gmail",
            host: mailHost,
            port: mailPort,
            secure: false,
            auth: {
                user: ADMIN_EMAIL,
                pass: ADMIN_EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: ADMIN_EMAIL,
            to: email,
            subject: subject,
            html: htmlContent,
        });

    } catch (error) {
        console.log(error)
        return 'daylaloi'
    }
};

