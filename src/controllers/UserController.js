const { where } = require("sequelize");
const User = require("../models/User");

module.exports = class UserController {
  static createUser(req, res) {
    res.render("users/create");
  }
};
