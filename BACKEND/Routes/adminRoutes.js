const express=require("express");
const router=express.Router();
const adminaController=require("../Controller/admin.Controller");


const auth = require("../Middleware/authMiddeware.js");
const allowRoles = require("../Middleware/roleMiddleware.js");

router.post("/api/manager",auth,allowRoles("admin"),adminaController.createManager);
router.get("/api/manager",auth,allowRoles("admin"),adminaController.managerList);
router.delete("/api/manager/:id",adminaController.deleteManager);


router.post("/api/vendors",auth,allowRoles("admin"),adminaController.createVendor);
router.get("/api/vendors",auth,adminaController.vendorList);
router.delete("/api/vendors/:id",adminaController.deleteVendor);

module.exports= router;