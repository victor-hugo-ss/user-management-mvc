const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router.get("/add", UserController.createUser);
router.post("/add", UserController.createUserSave);
router.get("/user/:id", UserController.viewDetailsUser);
router.get("/", UserController.homeUser);
router.get("/users", UserController.showUser);

module.exports = router;
