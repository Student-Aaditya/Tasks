const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ msg: "Invalid or expired token" });
        }
        req.user = decoded; 
        next();
    });
};

module.exports = authMiddleware;
