const express=require("express");
const router=express.Router();
const medicineController=require("../Controller/medicine.Controller.js");


router.post("/addmedicine",medicineController.addMedicine);
router.get("/getMedicine/:id",medicineController.getMedicine);


module.exports=router;