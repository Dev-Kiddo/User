const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  VBO_firstName: {
    type: String,
  },
  VBO_lastName: {
    type: String,
  },
  Co_applicantName: {
    type: String,
  },
  user_id: {
    type: String,
    trim: true,
    unique: true,
  },
  user_pin: {
    type: Number,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  marital_status: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  postalZip: {
    type: Number,
  },
  country: String,
  bankAccount: {
    type: String,
  },
  ifsc_code: {
    type: String,
  },
  currency: {
    type: Number,
  },
  pan_number: {
    type: Number,
  },
  company: String,
  isActive: String,
  description: String,
  store_link: String,
  enroll_time: String,
  enroll_date: String,
});

const UserModel = mongoose.model("userModel", userSchema);

module.exports = UserModel;
