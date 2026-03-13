const express = require("express")

const router = express.Router()
const user = require("../models/user");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
router.post("/register", async (req, res) => {
//  console.log("Register route hit");
  console.log(req.body);
  const { name, email, password, role } = req.body;

  try {

    const existingUser = await user.findOne({ email });
    // console.log("Checked existing user");
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const bcrypt = require("bcryptjs");

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      name,
      email,
      password: hashedPassword,
      role
    });
    //  console.log("User object created");
    await newUser.save();
//   console.log("User saved to DB");
    res.json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      "secret123",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: existingUser.role
    });

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

});
module.exports=router;