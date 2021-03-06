const User = require("../models/User");
const nodeMailer = require("nodemailer");
const { sendMail } = require("../common/mailer");
const otpGenerator = require("otp-generator");
const { unlink } = require("fs/promises");
const { enpass } = require("../common/enpass");
const {deleteFile} = require("../common/deleteFile");

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
  return res.status(200).json({ success: true, token: token });
};

const signUp = async (req, res, next) => {
  const { username, password, email } = req.value.body;

  const foundEmail = await User.findOne({ email });
  if (foundEmail)
    return res.status(409).json({ err: { message: "Email is already" } });

  const foundUserName = await User.findOne({ username });
  if (foundUserName)
    return res.status(409).json({ err: { message: "UserName is already" } });

  const password1 = await enpass(password);

  const otp = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });

  const body = `<h2>this is your otp code </h2>
                <p>${otp}</p>
                <p>Trân trọng</p>
                `;
  await sendMail(email, "Sign Up", body);

  const newUser = new User({
    username,
    password: password1,
    email,
    name: username,
    otpFG: otp,
  });

  await newUser.save();
  
  //Encode  a token
  const token = encodedToken(newUser._id);

  res.setHeader("Authorization", token);

  return res.status(201).json({ success: true });
};

const checkOtpSignUp = async (req, res, next) => {
  const { otp } = req.value.body;

  const user = await User.findOne({otpFG: otp})
  if (!user)
    return res
      .status(404)
      .json({ message: "wrong otp" });
  
  if(user.activate) return res.status(400).json({message: 'email have activated'})

  user.activate = true;
  await user.save()

  return res.status(200).json({ success: true, message: 'account activated successfully'});
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

  if(!user.activate) return res.status(400).json({ message: "Email has not been activated"})

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

  return res.status(200).json({success: true, message: "Reset password otp has been sent" });
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

  // user.password = password1;
  // user.otpFG = "";

  await User.updateOne({otpFG: otp}, {password: password1,otpFG: "" })
  return res.status(200).json({ success: true, message: 'Your Password was updated successfully' });
};

const checkOtpFG = async (req, res, next) => {
  const { otp } = req.value.body;

  const user = await User.findOne({otpFG: otp})
  if (!user)
    return res
      .status(404)
      .json({ message: "wrong otp" });
  
  if(!user.activate) return res.status(400).json({message: 'unconfirmed email'})

  return res.status(200).json({ success: true, message: 'check your OTP success'});
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

   //Assign a token
   const token = encodedToken(user._id);
   res.setHeader("Authorization", token);

  return res.status(200).json({ success: true, token: token });
};

const updateImage = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (!user) return res.status(400).json({ message: "Invalid user" });

  console.log("authenticate.js --> line 138 --> req.file", req.file);

  if(req.file){
    if(user.image !== '') deleteFile(user.image)
    user.image = req.file.firebaseUrl
  } else{
    res.status(400).json({message:'Please select the file image you want to upload'})
  }

  await user.save();

  return res.status(200).json({ success: true });
};

const updatePassword = async (req, res, next) => {
  const userId = req.body.token.sub;
  const {newpassword, newpasswordconfirm } = req.value.body;

  const user = await User.findOne({ userId });
  if (!user) return res.status(404).json({ message: "User does not exist" })

  if(newpassword !== newpasswordconfirm) res.status(404).json({ message: "New Password does not match" })
  
  const newpassword1 = await enpass(newpassword);
  console.log(newpassword1)

  await User.updateOne({_id: userId}, {password: newpassword1})

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

  const user = await User.findById(userId)
  .populate({path: "videomusic"})
  .populate({path: "favoritesong"})
  .populate({path: "favoritealbum"})
  .populate({path: "favoritepost"})
  .populate({path: "favoritevideomusic"})
  .populate({path: "song"})
  .populate({path: "post" ,populate: { path: 'owner' }})
  .populate({path: "album"})

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
