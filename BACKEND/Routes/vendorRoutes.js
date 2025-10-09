const express=require("express");
const router=express.Router();
const vendorController=require("../Controller/vendor.Controller.js");

router.get("/api/profile",vendorController.getProfile);
router.put("/api/update",vendorController.updateProfile);

module.exports=router;
