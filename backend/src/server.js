require("dotenv").config()

const app= require("./app");
const getDBConnection = require("./config/database");

const PORT = process.env.PORT || 3000;

getDBConnection();

app.listen(PORT, ()=>{
    console.log("server started successfully");
    console.log(`PORT = ${PORT}`);
});    