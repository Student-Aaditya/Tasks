const express = require("express");
const router = express.Router();

const superAdminController = require("../Controller/super_admin.Controller.js");
const adminaController =require("../Controller/admin.Controller.js")
const auth = require("../Middleware/authMiddeware.js");
const allowRoles = require("../Middleware/roleMiddleware.js");

router.post("/superAdmin/create", superAdminController.createSuperAdmin);
router.post("/api/admins", auth, allowRoles("super_admin"), superAdminController.registerAdmin);
router.get("/api/admins", auth, superAdminController.adminList);
router.delete("/api/admins/:id", auth, superAdminController.deleteAdmin);

router.post("/api/manager",auth,allowRoles("super_admin"),adminaController.createManager);
router.get("/api/manager",auth,adminaController.managerList);

router.post("/api/vendors",auth,allowRoles("super_admin"),adminaController.createVendor);
router.get("/api/vendors",adminaController.vendorList);

module.exports = router;

