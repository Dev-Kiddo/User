const express = require("express");
const UserModel = require("./../models/userModel");

const UserFeatures = require("./../utlis/utilities");

exports.top5VBO = (req, res, next) => {
  req.query.sort = "currency";
  req.query.fields = "VBO_firstName,Co_applicantName,user_id,country,currency";
  req.query.limit = "5";
  next();
};

exports.allUsers = async (req, res) => {
  try {
    const APIFeature = new UserFeatures(UserModel.find(), req.query)
      .filter()
      .sort()
      .fields()
      .pagination();

    const user = await APIFeature.queryProcess;

    res.status(201).json({
      status: "success",
      no_Of_Results: user.length,
      message: "ALL USERS",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "ALL USERS",
      data: { error },
    });
  }
};

exports.singleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(201).json({
      status: "success",
      message: "USER",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "USER",
      data: {
        error,
      },
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req);
    console.log(req.body);
    const user = await UserModel.create(req.body);
    res.status(201).json({
      status: "success",
      message: "CREATE USERS",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "CREATE USERS",
      data: {
        error,
      },
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.body, req.params.id, {
      new: true,
    });
    res.status(201).json({
      status: "success",
      message: "UPDATE USERS",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "UPDATE USERS",
      data: {
        error,
      },
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      message: "DELETE USERS DELETED",
      data: null,
    });
  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: "UPDATE USERS",
      data: {
        error,
      },
    });
  }
};
