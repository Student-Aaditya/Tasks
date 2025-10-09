const bcrypt=require("bcrypt");
const con=require("../Config/db.js");

const managerController={
    getProfile: (req, res) => {
        let { id, role } = req.query;

        if (role !== "manager") {
            return res.status(403).json({ msg: "Access denied. Only managers can access this route." });
        }

        const sql = "SELECT * FROM users WHERE id = ? AND role = ?";

        con.query(sql, [id, role], (err, result) => {
            if (err) {
                return res.status(500).json({ msg: "Database error", error: err.message });
            }

            if (result.length === 0) {
                return res.status(404).json({ msg: "Manager not found" });
            }

            return res.status(200).json(result[0]);
        });
    },
     updateProfile: (req, res) => {
        const { id, role } = req.query;
        const { name, username, password } = req.body;

        if (role !== "manager") {
            return res.status(403).json({ msg: "Access denied. Only managers can update this route." });
        }

        let updateData = {};
        if (name) updateData.name = name;
        if (username) updateData.username = username;
        if (password) {
            updateData.password = bcrypt.hashSync(password, 10);
        }
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ msg: "No fields to update" });
        }

        const sql = `UPDATE users SET ? WHERE id = ? AND role = ?`;

        con.query(sql, [updateData, id, role], (err, result) => {
            if (err) {
                return res.status(500).json({ msg: "Database error", error: err.message });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ msg: "Manager not found or no changes made" });
            }

            return res.status(200).json({ msg: "Manager profile updated successfully" });
        });
    }
}
module.exports=managerController;