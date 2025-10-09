const mysql=require("mysql2");

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Adii@85120",
    database:"userDb"
})

con.connect((err)=>{
    if(err)throw err;
    console.log("connected mysql database");
})

module.exports=con