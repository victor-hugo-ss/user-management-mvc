const { where } = require("sequelize");
const User = require("../models/User");

module.exports = class UserController {
  static createUser(req, res) {
    res.render("users/create");
  }

  static async showUser(req, res) {
    const users = await User.findAll({ raw: true });
    res.render("users/all", { users });
  }
};
