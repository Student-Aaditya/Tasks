const express=require("express");
const router=express.Router();
const managerController=require("../Controller/manager.Controller.js");

const auth = require("../Middleware/authMiddeware.js");
const allowRoles = require("../Middleware/roleMiddleware.js");

router.get("/api/profile",auth,allowRoles("manager"),managerController.getProfile);
router.put("/api/update",auth,allowRoles("manager"),managerController.updateProfile);

module.exports=router;
