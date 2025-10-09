const express = require("express");
const app = express();
const port = 7069;
const admin = require("./Routes/adminRoutes.js");
const super_admin = require("./Routes/super_admin.routes.js");
const vendor = require("./Routes/vendorRoutes.js");
const manager = require("./Routes/managerRoutes.js");
const bodyparser = require("body-parser");
const login = require("./Routes/loginRoutes.js");
const cors = require("cors");

app.use(bodyparser.json());
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))
app.use("/", login);
app.use("/admin", admin);
app.use("/superAdmin", super_admin);
app.use("/vendor", vendor);
app.use("/manager", manager);


app.listen(port, () => {
    console.log(`server working on${port}`);
})