const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// load validation register and login inputs
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// User Registration
exports.userRegister = async (req, res, next) => {
  try {
    // Form Validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json("User already exists");
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: {
        public_id: "This is sample id",
        url: "sample url",
      },
    });

    await newUser.save();

    // Function calling from jwtToken folder
    sendToken(newUser, 201, "User is created successfully", res);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// User Login
exports.userLogin = async (req, res, next) => {
  try {
    // Form Validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json("Invalid email or password");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json("Invalid user credential");
    }

    // Function calling from jwtToken folder
    sendToken(user, 200, "User logged in successfully", res);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// User Logout
exports.userLogout = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "User Logged out successfully",
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Forgot password
exports.forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("User not found!");
    }

    // Get Reset Password Token / Function calling from user model
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n If you have not requested this email then, please ignore it`;

    try {
      await sendEmail({
        email: user.email,
        subject: `E-commerce Password Recovery`,
        message,
      });
      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save({ validateBeforeSave: false });

      return res.status(500).json(error.message);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Reset Password
exports.resetPassword = async (req, res, next) => {
  try {
    // Creating token hash
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json("Reset Password Token is invalid or has been expired");
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json("Password does not match");
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    // Function calling from jwtToken folder
    sendToken(user, 200, "Password successfully reset", res);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get user detail
exports.getUserDetails = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update Password
exports.updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+password");

    if (!bcrypt.compareSync(req.body.oldPassword, user.password)) {
      return res.status(401).json("Old password is incorrect");
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
      return res.status(401).json("Password does not match");
    }

    user.password = req.body.newPassword;
    await user.save();

    // Function calling from jwtToken folder
    sendToken(user, 200, "Password updated successfully", res);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update user profile
exports.updateProfile = async (req, res, next) => {
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
    };

    // we will add cloud store later

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get all users by (admin)
exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Get single users by (admin)
exports.getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(400)
        .json(`User does not exist with id: ${req.params.id}`);
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update user role by (admin)
exports.updateUserRole = async (req, res, next) => {
  try {
    const newUserData = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    };

    // we will add cloud store later

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Delete user by (admin)
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    // we will remove cloud store late

    if (!user) {
      return res
        .status(400)
        .json(`User does not exist with id: ${req.params.id}`);
    }

    await user.deleteOne();

    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
