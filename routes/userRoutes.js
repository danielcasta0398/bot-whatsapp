const express = require("express");
const { getAllUsers } = require("../controller/webhookController");

const router = express.Router();

router.get("/", getAllUsers);



module.exports = { userRoutes: router };
