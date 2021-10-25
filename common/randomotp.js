const otpGenerator = require('otp-generator')


const otprandom = () => {
    otpGenerator.generate(6, { upperCase: false, specialChars: false });
} 

module.exports = {otprandom}
