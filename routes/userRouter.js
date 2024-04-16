const express = require("express");
const router = express.Router();

const userController = require("./../controllers/userController");

//top5VBO router

router.get("/top-5-vbo", userController.top5VBO, userController.allUsers);

router.get("/allusers", userController.allUsers);
router.get("/user/:id", userController.singleUser);
router.post("/createusers", userController.createUser);
router.patch("/updateusers/:id", userController.updateUser);
router.delete("/deleteusers/:id", userController.deleteUser);

module.exports = router;
