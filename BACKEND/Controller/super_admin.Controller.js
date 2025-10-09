const bcrypt = require("bcrypt");
const con = require("../Config/db.js");

const superAdminController = {
    createSuperAdmin: async (req, res) => {
        const { name, username, password, role, created_by } = req.body;

        if (!name || !username || !password || !role) {
            return res.status(400).json({ error: "Name, username, password, and role are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = "INSERT INTO users (name, username, password, role, created_by) VALUES (?, ?, ?, ?, ?)";

        con.query(sql, [name, username, hashedPassword, role, created_by || null], (err, result) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ error: "Username already exists" });
                }
                return res.status(500).json({ error: err.message });
            }

            res.status(201).json({
                message: "User registered successfully",
                userId: result.insertId
            });
        });
    },
     registerAdmin:async (req,res)=>{
        const { name, username, password, role, created_by } = req.body;

    if (!name || !username || !password || !role) {
        return res.status(400).json({ error: "Name, username, password, and role are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (name, username, password, role, created_by) VALUES (?, ?, ?, ?, ?)";

     con.query(sql, [name, username, hashedPassword, role, created_by || null], (err, result) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).json({ error: "Username already exists" });
            }
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "User registered successfully",
            userId: result.insertId
        });
    });
    },
    adminList:(req,res)=>{
        const sql="SELECT * FROM users WHERE role='admin'";
       con.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ msg: "Database error", error: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ msg: "No admin data found" });
        }

        return res.status(200).json(result );
    });
    },
    deleteAdmin:(req,res)=>{
     const { id } = req.params;

    const sql = "DELETE FROM users WHERE id=? AND role='admin'";
    con.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!sql) return res.status(404).json({ msg: "Admin not found" });
        res.status(200).json({ msg: "Admin deleted successfully" });
    });
}
}
module.exports=superAdminController