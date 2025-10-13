const con=require("../Config/db.js");

const bucketController={
    addBucket:async(req,res)=>{
        const {name,image, created_by}=req.body;

        if(!name || !image || !created_by ){
            return res.status(400).json({error:"Name image link created_by role are required"});
        }

        const sql="INSERT INTO BUCKET (name,image,created_by)VALUES (?,?,?)";
        con.query(sql,[name,image,created_by || null],(err,result)=>{
            if(err){
                if(err.code=="ER_DUP_ENTRY"){
                    return res.status(400).json({msg:"name already define "});
                }
                return res.status(400).json({err:err.message});
            }
             res.status(201).json({
            message: "Bucket Created successfully",
            userId: result.insertId
        });
        })   

    }
}
module.exports=bucketController;