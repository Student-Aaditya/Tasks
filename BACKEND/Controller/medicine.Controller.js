const con = require("../Config/db.JS");

const medicineController = {
    addMedicine: async (req, res) => {
        const {
            bucket_id,
            name, 
            salt_composition,
            manufacturers,
            medicine_type,
            packaging,
            packaging_typ,
            mrp,
            cost_price,
            discount_percent,
            selling_price,
            offers_percent,
            prescription_required,
            storage,
            country_of_origin,
            manufacture_address,
            best_price,
            brought,
            image
        } = req.body;

        const value=[bucket_id,name,salt_composition,manufacturers,medicine_type,packaging,packaging_typ,mrp,cost_price,discount_percent,selling_price,offers_percent,prescription_required
            ,storage,country_of_origin,manufacture_address,best_price,brought,image]

        if (!bucket_id || !name) {
            return res.status(400).json({ message: "Bucket ID and Medicine Name are required" });
        }

        const sql="INSERT INTO MEDICINE (bucket_id, name, salt_composition, manufacturers, medicine_type, packaging, packaging_typ,mrp, cost_price, discount_percent, selling_price, offers_percent, prescription_required,storage, country_of_origin, manufacture_address, best_price, brought, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        con.query(sql,value,(err,result)=>{
            if(err){
                return res.status(500).json({msg:"Database Error"});
            }

            return res.status(201).json({
                msg:"Medicine list created successful",
                userId: result.insertId
            })
        })
    },
    getMedicine:async(req,res)=>{
        const {id}=req.params;

        const sql="SELECT * FROM MEDICINE where bucket_id=? ";
        con.query(sql,[id],(err,result)=>{
            if(err){
                return res.status(500).json({msg:"Id not found"});
            }
            return res.status(200).json(result);
        })
    }
}

module.exports = medicineController;
