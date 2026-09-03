// require("dotenv").config();

// const mongoose= require("mongoose");

// const getDBConnection = async () => {
//     try {
//         const conn= await mongoose.connect(process.env.MONGO_URI);
//         console.log("db connected successfully");
//     } catch (error) {
//         console.error("db connection failed");
//         console.error(error.message);
        
//         process.exit(1);
//     }
// }

// module.exports=getDBConnection;


require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8"]);

const mongoose = require("mongoose");

const getDBConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected successfully");
    } catch (error) {
        console.error("db connection failed");
        console.error(error.message);

        process.exit(1);
    }
};

module.exports = getDBConnection;
