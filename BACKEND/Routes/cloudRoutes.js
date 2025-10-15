const express=require("express");
const router=express.Router();
const upload = require("../Services/cloudinary.js");
const controller=require("../Controller/imageController.js");

router.post("/user/upload",upload.single("file"),controller.uploadImage);

