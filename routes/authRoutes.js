const express = require("express");
const router = express.Router();

const { register, login , updateUser, deleteUser} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
