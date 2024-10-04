const bcrypt = require("bcrypt");
const User = require("../Models/UserSchema");

const SignUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      metrics: [],
    });

    await newUser.save();

    res.status(200).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

const Signin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password." });
      }
  
      // Respond with a success message and user ID
      res.status(200).json({ 
        message: "Sign-in successful!", 
        userId: user._id // Include the user ID in the response
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error." });
    }
  };
module.exports = { SignUp, Signin };
