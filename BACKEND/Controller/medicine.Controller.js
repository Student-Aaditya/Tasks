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
            brought
        } = req.body;

        // 1️⃣ Declare imageUrls first
        const imageUrls = req.files?.map(file => file.path) || [];
        console.log("Uploaded Image URLs:", imageUrls);
        const prescriptionValue = prescription_required === 'true' || prescription_required === true ? 1 : 0;

        // 2️⃣ Prepare value array
        const value = [
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
            prescriptionValue,
            storage,
            country_of_origin,
            manufacture_address,
            best_price,
            brought,
            JSON.stringify(imageUrls)
        ];
        //  prescription_required = prescription_required === 'true' || prescription_required === true ? 1 : 0;

        console.log("Bucket ID:", bucket_id);
        console.log("Name:", name);
        console.log("Values:", value);

        if (!bucket_id || !name) {
            return res.status(400).json({ message: "Bucket ID and Medicine Name are required" });
        }

        const sql = `
            INSERT INTO MEDICINE (
                bucket_id, name, salt_composition, manufacturers, medicine_type,
                packaging, packaging_typ, mrp, cost_price, discount_percent,
                selling_price, offers_percent, prescription_required,
                storage, country_of_origin, manufacture_address, best_price,
                brought, image
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        con.query(sql, value, (err, result) => {
            if (err) {
                console.error("MySQL Insert Error:", err);
                return res.status(500).json({ msg: err.message });
            }

            return res.status(201).json({
                msg: "Medicine list created successfully",
                images: imageUrls,
                userId: result.insertId
            });
        });
    },

  getMedicine: async (req, res) => {
    const { id } = req.params;

    const sql = "SELECT * FROM MEDICINE WHERE bucket_id=?";
    con.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ msg: "Id not found" });
        }

        const updatedResult = result.map(item => ({
            ...item,
            images: (() => {
                try {
                    return Array.isArray(item.image) ? item.image : JSON.parse(item.image);
                } catch (e) {
                    return item.image ? [item.image] : [];
                }
            })()
        }));

        return res.status(200).json(updatedResult);
    });
}


};

module.exports = medicineController;
