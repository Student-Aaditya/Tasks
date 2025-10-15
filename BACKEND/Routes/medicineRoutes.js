const express=require("express");
const router=express.Router();
const medicineController=require("../Controller/medicine.Controller.js");
const upload=require("../Services/cloudinary.js");

router.post("/addmedicine",upload.single("image"),medicineController.addMedicine);
router.get("/getMedicine/:id",medicineController.getMedicine);


module.exports=router;