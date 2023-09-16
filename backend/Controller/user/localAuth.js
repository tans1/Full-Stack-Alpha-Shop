const User = require("../../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const new_user = await User({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    });
    await new_user.save();
    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Unable to create User",
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });
    if (user == null) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      if (user.password == password) {
        const token = GenerateToken(user._id);
        await res.cookie("token", token, {
          maxAge: 86400000,
          httpOnly: true,
          signed: true,
        });

        return res.status(200).json({
          message: "user logged In",
        });
      } else {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: "Unable to get User",
    });
  }
};

const GenerateToken = (userId) => {
  const payload = {
    id: userId,
  };
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

//export
module.exports = {
  SignUp,
  Login,
};
