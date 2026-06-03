const express = require("express");
const router = express.Router();

const { helloRoute } = require("../controllers/apiController");

router.get("/hello", helloRoute);

module.exports = router;
