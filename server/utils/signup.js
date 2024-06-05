const bcrypt = require("bcryptjs");
const UserModel = require("../models/user");

const signupHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      res.status(422).json({ message: "User already exists" });
    }
    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const response = await newUser.save();
    console.log(response);
    res
        .status(203)
        .json({ message: "User created successfully"});
  } catch (error) {
    console.log(error);
  }
};
module.exports = signupHandler;
