const express = require("express");
const router = express.Router();

const loginController= require("../Controller/login.Controller.js");

router.post("/api/login",loginController.login);

module.exports=router