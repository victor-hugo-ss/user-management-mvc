const { where } = require("sequelize");
const User = require("../models/User");
const { raw } = require("express");

module.exports = class UserController {
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

  static async updateUser(req, res) {
    const id = req.params.id;
    const user = await User.findOne({ raw: true, where: { id: id } });
    res.render("users/edit", { user });
  }

  static async updateUserPost(req, res) {
    const id = req.body.id;

    const user = {
      name: req.body.name,
      lastname: req.body.lastname,
      occupation: req.body.occupation,
      age: req.body.age,
    };

    await User.update(user, { where: { id: id } });
    console.log("User updated successfully!");
    res.redirect("/users");
  }

  static async deleteUser(req, res) {
    const id = req.body.id;
    await User.destroy({ where: { id: id } });
    res.redirect("/users");
  }

  static async viewDetailsUser(req, res) {
    const id = req.params.id;
    const user = await User.findOne({ raw: true, where: { id: id } });
    res.render("users/user", { user });
  }

  static homeUser(req, res) {
    res.render("users/home");
  }

  static async showUser(req, res) {
    const users = await User.findAll({ raw: true });
    res.render("users/all", { users });
  }
};
