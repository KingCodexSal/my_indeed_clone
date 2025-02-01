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


router.put("/update", async (req, res) => {
  let { email, oldPassword, newEmail, newPassword } = req.body;

  // Trim the input fields
  email = email?.trim();
  oldPassword = oldPassword?.trim();
  newEmail = newEmail?.trim();
  newPassword = newPassword?.trim();

  if (!email || !oldPassword || (!newEmail && !newPassword)) {
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

    // Compare the old password
    const isMatch = await bcrypt.compare(oldPassword, student.password);
    if (!isMatch) {
      return res.json({
        status: "FAILED",
        msg: "Incorrect password",
      });
    }

    // Create an update object
    let updateData = {};
    if (newEmail) updateData.email = newEmail;
    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      updateData.password = hashedPassword;
    }

    // Update the student's record
    await Students.updateOne({ email }, { $set: updateData });

    return res.json({
      status: "SUCCESS",
      msg: "Account updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: "FAILED",
      msg: "An error occurred while updating the account",
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the ID is valid
    if (!id) {
      return res.status(400).json({
        status: "FAILED",
        msg: "User ID is required",
      });
    }

    // Find the user by ID
    const student = await Students.findById(id);
    if (!student) {
      return res.status(404).json({
        status: "FAILED",
        msg: "User not found",
      });
    }

    // Delete the user
    await Students.findByIdAndDelete(id);

    return res.json({
      status: "SUCCESS",
      msg: "Account deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "FAILED",
      msg: "An error occurred while deleting the account",
    });
  }
});



module.exports = router;
