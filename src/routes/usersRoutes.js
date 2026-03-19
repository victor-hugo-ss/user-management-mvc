const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/add", UserController.createUser);
router.get("/users", UserController.showUser);
router.get("/", UserController.homeUser);

module.exports = router;
