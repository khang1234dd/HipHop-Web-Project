const User = require("../models/User");
const nodeMailer = require("nodemailer");
const { sendMail } = require("../common/mailer");
const otpGenerator = require("otp-generator");
const { unlink } = require("fs/promises");
const { enpass } = require("../common/enpass");

const JWT = require("jsonwebtoken");
const { JWT_SECRET, CLIENT_URL } = require("../config/index");

const encodedToken = (userID) => {
  return JWT.sign(
    {
      iss: "ProjectCNPMM",
      sub: userID,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    JWT_SECRET
  );
};

const secret = async (req, res, next) => {
  return res.status(200).json({ resource: true });
};

const signIn = async (req, res, next) => {

  const {username, password} = req.value.body

  const user = await User.findOne({ username });

  if (!user) return res.status(400).json({message: 'Your username is invalid .Try again !'})
  if (user.lock) return res.status(403).json({message: 'Your ID has been locked!'})

  const isCorrectPassword = await user.isValidPassword(password);

  if (!isCorrectPassword) return res.status(400).json({message: 'Password is not correct!'})

  //Assign a token
  const token = encodedToken(user._id);
  res.setHeader("Authorization", token);
  return res.status(200).json({ success: true });
};

const signUp = async (req, res, next) => {
  const { username, password, email } = req.value.body;

  const foundEmail = await User.findOne({ email });
  if (foundEmail)
    return res.status(403).json({ err: { message: "Email is already" } });

  const foundUserName = await User.findOne({ username });
  if (foundUserName)
    return res.status(403).json({ err: { message: "UserName is already" } });

  const password1 = await enpass(password);

  const newUser = new User({
    username,
    password: password1,
    email,
    name: username,
  });

  newUser.save();

  //Encode  a token
  const token = encodedToken(newUser._id);

  res.setHeader("Authorization", token);

  return res.status(201).json({ success: true });
};

const checkOtpSignUp = async (req, res, next) => {
  const { otp , email } = req.value.body;

  const user = await User.findOne({email})
  if (!user)
    return res
      .status(404)
      .json({ message: "User with this email does not exist" });
  
  if(user.activate) return res.status(400).json({message: 'email have activated'})

  if (user.otp !== otp) return res.status(400).json({ message: "wrong otp" });

  return res.status(200).json({ success: true });
};

const forgetPassword = async (req, res, next) => {
  const { username, email } = req.value.body;
  const user = await User.findOne({ email });

  if (!user)
    return res
      .status(404)
      .json({ message: "User with this email does not exist" });

  if (user.username !== username) {
    return res.status(404).json({ message: "The email is not from this user" });
  }

  // const resetLink = encodedToken(user._id);
  const otp = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });
  user.otpFG = otp;

  // user.resetLink = resetLink;
  await user.save();

  const body = `<h2>this is your otp code </h2>
                <p>${otp}</p>
                <p>Trân trọng</p>
                `;
  await sendMail(email, "Forgot Password", body);

  return res.status(200).json({ message: "Reset password otp has been sent" });
};

const resetPassword = async (req, res, next) => {
  const { newpassword, otp } = req.value.body;
  const user = await User.findOne({ otpFG: otp });
  console.log(user);
  if (!user) return res.status(400).json({ message: "Invalid Otp" });
  const checkPass = await user.isValidPassword(newpassword);
  if (checkPass)
    return res.status(400).json({
      message: "The new password cannot be the same as the old password",
    });

  if (user.otpFG === "")
    return res.status(400).json({ message: "please verify otp" });

  if (user.otpFG !== otp) return res.status(404).json({ message: "wrong otp" });

  const password1 = await enpass(newpassword);

  user.password = password1;
  user.otpFG = "";

  await user.save();
  return res.status(200).json({ success: true });
};

const checkOtpFG = async (req, res, next) => {
  const { otp , email } = req.value.body;

  const user = await User.findOne({email})
  if (!user)
    return res
      .status(404)
      .json({ message: "User with this email does not exist" });
  
  if(!user.activate) return res.status(400).json({message: 'unconfirmed email'})

  if (user.otp !== otp) return res.status(400).json({ message: "wrong otp" });

  return res.status(200).json({ success: true });
};

const updateName = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { name } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(400).json({ message: "Invalid user" });

  if (user.name === name)
    return res.status(400).json({ message: "Name is old name" });

  user.name = name;

  await user.save();

  return res.status(200).json({ success: true });
};

const updateImage = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (!user) return res.status(400).json({ message: "Invalid user" });

  console.log("authenticate.js --> line 138 --> req.file", req.file);

  if (!req.file) {
    return res.status(400).json({ message: "Input is file image" });
  }

  if (user.image !== "upload/image/1.png") await unlink(user.image);
  user.image = req.file.path;
  await user.save();

  return res.status(200).json({ success: true });
};

const updatePassword = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findOne({ userId });
  if (!user) return res.status(404).json({ message: "User does not exist" });

  const { oldpassword, newpassword, newpasswordconfirm } = req.value.body;

  const validPasswordOld = await user.isValidPassword(oldpassword);
  if (!validPasswordOld)
    return res.status(400).json({ message: "wrong old password" });

  if (oldpassword === newpassword)
    return res.status(400).json({ message: "password is old password" });

  user.password = newpassword;

  await user.save();

  return res.status(200).json({ success: true });
};

//da login -->
const sendMailUpdateEmail = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const otp = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });
  user.otp = otp;
  await user.save();

  const body = `<h2>this is your otp code </h2>
                <p> ${otp}</p>
                <p>Trân trọng</p>
                `;
  const sendmail = await sendMail(user.email, "Your Otp", body);
  if (sendmail === "daylaloi")
    return res.status(400).json({ message: "error send mail" });

  return res.status(200).json({ message: "Otp code has been sent" });
};

const updateEmail = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { newemail, otp } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });
  if (user.otp === "")
    return res.status(400).json({ message: "please verify otp" });

  if (user.otp !== otp) return res.status(400).json({ message: "wrong otp" });

  user.email = newemail;
  user.otp = "";

  await user.save();

  return res.status(200).json({ success: true });
};

const checkOtp = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { otp } = req.value.body;

  const user = await User.findById(userId);
  if (!user)
    return res
      .status(404)
      .json({ message: "User with this token does not exist" });

  if(!user.activate) return res.status(400).json({message: 'unconfirmed email'})

  if (user.otp !== otp) return res.status(400).json({ message: "wrong otp" });

  return res.status(200).json({ success: true });
};
// <--

const userInfo = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  return res.status(200).json({ user });
};

module.exports = {
  secret,
  signIn,
  signUp,
  checkOtpSignUp,
  forgetPassword,
  resetPassword,
  checkOtpFG,
  updateName,
  updateImage,
  updatePassword,
  sendMailUpdateEmail,
  updateEmail,
  checkOtp,
  userInfo,
};
