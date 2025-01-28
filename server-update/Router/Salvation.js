const express = require("express");
const router = express.Router();
const Students = require("../models/Student");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;

  // Trim the input fields
  name = name.trim();
  email = email.trim();
  password = password.trim();

  if (!name || !email || !password) {
    return res.json({
      status: "FAILED",
      msg: "Empty input field(s)",
    });
  }

  try {
    // Check if the user already exists
    const existingStudent = await Students.findOne({ email });
    if (existingStudent) {
      return res.json({
        status: "FAILED",
        msg: "User already exists",
      });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create and save the new student
    const newStudent = new Students({
      name,
      email,
      password: hashedPassword,
    });

    await newStudent.save();
    return res.json({
      status: "SUCCESS",
      msg: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: "FAILED",
      msg: "An error occurred during registration",
    });
  }
});

router.post("/signin", async (req, res) => {
  let { email, password } = req.body;

  // Trim the input fields
  email = email?.trim();
  password = password?.trim();

  if (!email || !password) {
    return res.json({
      status: "FAILED",
      msg: "Empty input field(s)",
    });
  }

  try {
    // Find the student by email
    const student = await Students.findOne({ email });
    if (!student) {
      return res.json({
        status: "FAILED",
        msg: "Invalid email or password",
      });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.json({
        status: "FAILED",
        msg: "Invalid email or password",
      });
    }

    return res.json({
      status: "SUCCESS",
      msg: "Sign-in successful",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: "FAILED",
      msg: "An error occurred during sign-in",
    });
  }
});

module.exports = router;
