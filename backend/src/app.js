const express= require("express");
const cors= require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const departmentRoutes = require("./routes/departmentRoutes");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const facultyRoutes = require("./routes/facultyRoutes");
const eventRoutes = require("./routes/eventRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const errorHandler = require("./middleware/errorMiddlewares");


const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res){
    let response={
        "username":"sahil",
        "age": 17
    }
    res.send(req.admin);
})

app.use("/api/department", departmentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/uploads", uploadRoutes);

app.use(errorHandler);

module.exports=app;