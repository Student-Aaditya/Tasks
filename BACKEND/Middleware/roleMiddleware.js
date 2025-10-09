const allowRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ msg: "User not authenticated" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ msg: "Access denied. Insufficient permissions." });
        }

        next();
    };
};

module.exports = allowRoles;
