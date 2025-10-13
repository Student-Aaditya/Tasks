const express=require("express");
const router=express.Router();
const bucketController =require("../Controller/bucketController.js");

router.post("/addbucket",bucketController.addBucket);
router.get("/getbucket",bucketController.getBucket);


module.exports=router;