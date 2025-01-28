const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

const Student = model("Student", StudentSchema);

module.exports = Student;
