const { validateEmail, validateLength } = require("../helpers/validation");
const { validate } = require("../models/User");
const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email address," });
    }

    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message:
          "This email address already exists, try with a different email address",
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res
        .status(400)
        .json({
          message: "First name must be between 3 to 30 characters long",
        });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: "Last name must be between 3 to 30 characters long" });
    }

    if (!validateLength(password, 6, 40)) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters long" });
    }

    return;
    const user = await new User({
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
