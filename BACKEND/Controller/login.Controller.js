require("dotenv").config();
const con = require("../Config/db.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginController = {
    login: (req, res) => {
        const { username, password, role } = req.body;

        if (!username || !password || !role) {
            return res.status(400).json({ msg: "Username, password, and role are required." });
        }

        const sql = "SELECT * FROM users WHERE username = ? AND role = ?";
        con.query(sql, [username, role], async (err, results) => {
            if (err) return res.status(500).json({ msg: "Database error", error: err });

            if (results.length === 0) {
                return res.status(401).json({ msg: "Invalid credentials" });
            }

            const user = results[0];
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(401).json({ msg: "Invalid credentials" });
            }

            const token = jwt.sign(
                { id: user.id, username: user.username, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            return res.status(200).json({
                msg: "Login successful",
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    role: user.role
                }
            });
        });
    }
};

module.exports = loginController;
