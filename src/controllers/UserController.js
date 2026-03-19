const { where } = require("sequelize");
const User = require("../models/User");

module.exports = class UserController {
  static homeUser(req, res) {
    res.render("users/home");
  }

  static createUser(req, res) {
    res.render("users/create");
  }

  static async createUserSave(req, res) {
    const user = {
      name: req.body.name,
      lastname: req.body.lastname,
      occupation: req.body.occupation,
      age: req.body.age,
    };

    await User.create(user);
    console.log("User successfully registered!");
    res.redirect("/users");
  }

  static async showUser(req, res) {
    const users = await User.findAll({ raw: true });
    res.render("users/all", { users });
  }
};
